using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EFDataAccess.DataModels
{
    public class TeaItem
    {
        [Key]
        public int id { get; set; }
        public string ItemName { get; set; }
        public int CategoryId { get; set; }
        public double ItemPrice { get; set; }
        public int ItemUnit { get; set; }
        public int UnitNumber { get; set; }
        public string MeasureUnit { get; set; }

        public string Sizes { get; set; }

        public string ItemType { get; set; }
   
        public DateTime ProductDate { get; set; }

        public DateTime StorageDate { get; set; }

        public string ItemTaken { get; set; }

        public string Imagepath { get; set; }
    }
}
