using Microsoft.EntityFrameworkCore;

namespace REST_ef.Models.EF {
    public class ShopItemDbContext : DbContext {
        public ShopItemDbContext(DbContextOptions<ShopItemDbContext> options)
            : base(options) { }

        public DbSet<ShopItem> Items { get; set; }
    }   
}
