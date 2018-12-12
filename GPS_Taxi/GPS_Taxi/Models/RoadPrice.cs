namespace GPS_Taxi.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("RoadPrice")]
    public partial class RoadPrice
    {
        public int id { get; set; }

        public double? value { get; set; }
    }
}
