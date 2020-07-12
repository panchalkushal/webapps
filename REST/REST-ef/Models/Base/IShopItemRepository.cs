using System;
using System.Collections.Generic;

namespace REST_ef.Models.Base.Domain
{
    public interface IShopItemRepository
    {
        public IEnumerable<ShopItem> Items { get; }
        public ShopItem this[Guid ItemId] { get; }
        ShopItem AddItem(ShopItem item);
        public ShopItem UpdateItem(ShopItem item);
        public void DeleteItem(Guid ItemId);
    }
}
