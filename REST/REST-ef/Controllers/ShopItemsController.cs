using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using REST_ef.Models;
using REST_ef.Models.Base.Domain;
using REST_ef.Models.EF;

namespace REST_ef.Controllers
{
    [Route("api/[controller]")]    
    public class ShopItemsController : Controller
    {        
        private IShopItemRepository repository;

        public ShopItemsController(IShopItemRepository repo)
        {            
            repository = repo;
        }

        [HttpGet]
        public IEnumerable<ShopItem> Get() => repository.Items;

        [HttpGet("{ItemId}")]
        public ShopItem Get(Guid ItemId) => repository[ItemId];

        [HttpPost]
        public ShopItem Post([FromBody] ShopItem si) =>
            repository.AddItem(new ShopItem
            {
                ItemName = si.ItemName,
                Price = si.Price,
                SKU = si.SKU
            });

        [HttpPut]
        public ShopItem Put([FromBody] ShopItem si) =>
            repository.UpdateItem(si);

        [HttpPatch("{ItemId}")]
        public StatusCodeResult Patch(Guid ItemId,
                [FromBody] JsonPatchDocument<ShopItem> patch)
        {
            ShopItem si = Get(ItemId);
            if (si != null)
            {
                patch.ApplyTo(si);
                return Ok();
            }
            return NotFound();
        }

        [HttpDelete]
        public void Delete(Guid Itemid) => 
            repository.DeleteItem(Itemid);
    }
}
