namespace GPS_Taxi.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("capcha")]
    public partial class capcha
    {
        public capcha()
        {
            orders = new HashSet<order>();
        }

        public int id { get; set; }

        public int? capcha_number { get; set; }

        public int? id_order { get; set; }

        public virtual ICollection<order> orders { get; set; }
    }
}
