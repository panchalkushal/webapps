using REST_ef.Models.Base;
using System.ComponentModel.DataAnnotations.Schema;

namespace REST_ef.Models
{
    public class ShopItem : BaseModel
    {        
        public string ItemName { get; set; }
        public string SKU { get; set; }

        [Column(TypeName = "decimal(18,4)")]
        public decimal Price { get; set; }
    }
}
