using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CompShop.Models
{
    public class ItemList
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public decimal Price { get; set; }
    }

    public class ItemListContext : DbContext
    {
        public DbSet<ItemList> StockModel { get; set; }
    }
}