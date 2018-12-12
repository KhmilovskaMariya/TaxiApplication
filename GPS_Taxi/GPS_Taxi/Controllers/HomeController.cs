using GPS_Taxi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GPS_Taxi.Controllers
{
    public class HomeController : Controller
    {
        TaxiDB db = new TaxiDB();

        public ActionResult Index()
        {
            return View();
        }

        public void MakeOrder(string From, string To, int TelNumber, string Distance, string Time)
        {
            Distance = Math.Round(
                Convert.ToDouble(Distance), 2).
                ToString();
            Time = Math.Round(
                Convert.ToDouble(Time), 2).
                ToString();
            float Price = float.Parse( 
                Math.Round( 
                Convert.ToDouble(
                    GetPrice(Distance)), 0).
                        ToString(),
                    System.Globalization.
                    CultureInfo.InvariantCulture);

            order ord = new order
            {
                start_location = From,
                end_location = To,
                telephone_number = TelNumber,
                distance = Distance,
                time_road = Time,
                time_do_order = DateTime.Now.TimeOfDay,
                date_do_order = DateTime.Now.Date,
                state = "active",
                price = Price
            };

            GenerateCapcha(ord);

            db.orders.Add(ord);
            db.SaveChanges();

            var price = db.RoadPrices.FirstOrDefault();
            var totalPrice = price.value * Convert.ToDouble(ord.distance);
        }

        private void GenerateCapcha(order ord)
        {
            Random rand = new Random();
            string value = "";

            for (int i = 0; i < 4; i++)
            {
                value += rand.Next(0, 9).ToString();
            }

            var capchNumber = Convert.ToInt32(value);

            capcha capch = new capcha() {
                  capcha_number = capchNumber,
                  id_order = ord.id                   
            };

            db.capchas.Add(capch);
            db.SaveChanges();

            ord.id_capcha = db.capchas.Where(s => s.id_order == ord.id).FirstOrDefault().id;
        }

        public string GetPrice(string Distance)
        {
            double distance = Math.Round(
                Convert.ToDouble(Distance), 2);
            var value = distance * db.RoadPrices.FirstOrDefault().value;

            return  value.ToString();
        }
    }
}