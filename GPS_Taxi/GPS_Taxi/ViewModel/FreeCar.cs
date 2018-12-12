using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GPS_Taxi.ViewModel
{
    public class FreeCar
    {
        public int id { get; set; }

        public string Name { get; set; }

        public string Car1 { get; set; }

        public string state { get; set; }

        public double? geo_latitude { get; set; }

        public double? geo_longitude { get; set; }

        public string car_number { get; set; }

        public int? tel_number { get; set; }
    }
}