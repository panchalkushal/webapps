using System;
using System.Collections.Generic;
using System.Linq;
using REST_ef.Models.Base.Domain;

namespace REST_ef.Models.EF
{
    public class EFShopItemRepository: IShopItemRepository
    {
        private ShopItemDbContext context { get; }
        private Dictionary<Guid, ShopItem> items;

        public EFShopItemRepository(ShopItemDbContext dbctx)
        {
            context = dbctx;
            items = new Dictionary<Guid, ShopItem>();

            foreach(var item in context.Items)
            {
                items.Add(item.Id, item);
            }    
        }

        ShopItem IShopItemRepository.this[Guid ItemId] => items.ContainsKey(ItemId) ? items[ItemId] : null;

        IEnumerable<ShopItem> IShopItemRepository.Items => context.Items;

        public ShopItem AddItem(ShopItem item)
        {
            ShopItem dbItem = new ShopItem();

            if (item.Id == null || item.Id == Guid.Empty)
            {
                dbItem = item;
                context.Items.Add(dbItem);
            }
            else
            {
                dbItem = context.Items.FirstOrDefault(p => p.Id == item.Id);
                if (dbItem != null)
                {
                    dbItem.ItemName = item.ItemName;
                    dbItem.Price = item.Price;
                    dbItem.SKU = item.SKU;                    
                }
            }
            context.SaveChanges();
            return dbItem;
        }

        void IShopItemRepository.DeleteItem(Guid ItemId)
        {
            ShopItem dbItem = context.Items
                .FirstOrDefault(i => i.Id == ItemId);
            if (dbItem != null)
            {
                context.Items.Remove(dbItem);
                context.SaveChanges();
            }                        
        }

        ShopItem IShopItemRepository.UpdateItem(ShopItem item) => AddItem(item);        
    }
}
