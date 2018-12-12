namespace GPS_Taxi.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Car
    {
        public Car()
        {
            orders = new HashSet<order>();
        }

        public int id { get; set; }

        [StringLength(50)]
        public string Name { get; set; }

        [Column("Car")]
        [StringLength(50)]
        public string Car1 { get; set; }

        [StringLength(50)]
        public string state { get; set; }

        public double? geo_latitude { get; set; }

        public double? geo_longitude { get; set; }

        [StringLength(50)]
        public string car_number { get; set; }

        public int? tel_number { get; set; }

        public virtual ICollection<order> orders { get; set; }
    }
}
