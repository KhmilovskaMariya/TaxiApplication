namespace GPS_Taxi.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class order
    {
        public int id { get; set; }

        [Required]
        public string start_location { get; set; }

        [Required]
        public string end_location { get; set; }

        public int telephone_number { get; set; }

        public double? price { get; set; }

        [StringLength(50)]
        public string time_road { get; set; }

        [StringLength(50)]
        public string distance { get; set; }

        public int? CarID { get; set; }

        [Required]
        [StringLength(50)]
        public string state { get; set; }

        [Column(TypeName = "date")]
        public DateTime date_do_order { get; set; }

        public TimeSpan time_do_order { get; set; }

        public int? id_employee { get; set; }

        public int? id_capcha { get; set; }

        public virtual capcha capcha { get; set; }

        public virtual Car Car { get; set; }

        public virtual user user { get; set; }
    }
}
