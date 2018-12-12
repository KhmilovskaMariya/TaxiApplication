using GPS_Taxi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GPS_Taxi.ViewModel
{
    public class Confirm
    {
        public order ord { get; set; }

        public Car taxi { get; set; }
    }
}