using GPS_Taxi.Models;
using GPS_Taxi.ViewModel;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Twilio;

namespace GPS_Taxi.Controllers
{
    [Authorize]
    public class AdminController : Controller
    {
        // GET: /Admin/
        TaxiDB db = new TaxiDB();

        public ActionResult Index()
        {
            return View();
        }

        //Get order
        public ActionResult OrderCurrent()
        {
            Response.AddHeader("Refresh", "5");

            var listCurrentOrders = db.orders.Where(s => s.state == "active").ToList();

            return View(listCurrentOrders);
        }

        public ActionResult MakeOrder(int ID)
        {
            //WebClient client = new WebClient();
            //string to = "380964576490";
            //string message = "yes it do";
            //string baseurl = "http://api.clickatell.com/http/sendmsg?user=chyika&password="+
            //"fQbFKbFETKaQbH&api_id=3542061&to='" + to + "'&text='" + message + "'";
            //client.OpenRead(baseurl);

            var listCars = db.Cars.Where(s => s.state == "вільний").ToList();
            var order = db.orders.Where(s => s.id == ID).FirstOrDefault();

            TaxiToOrder freeTaxiAndOrder = new TaxiToOrder()
            {
                cars = listCars,
                ord = order
            };

            return View(freeTaxiAndOrder);
        }

        [HttpGet]
        public ActionResult ConfirmOrder(int ID_order, int ID_taxi)
        {
            var orderTmp = db.orders.Where(s=>s.id == ID_order).FirstOrDefault();
            var taxiTmp = db.Cars.Where(s=>s.id== ID_taxi).FirstOrDefault();

            Confirm order = new Confirm()
            {
                ord = orderTmp,
                taxi = taxiTmp
            };

            return View(order);
        }

        [HttpPost]
        public ActionResult ConfirmOrderSuccess(int ID_order, int ID_taxi)
        {
            var order = db.orders.Where(s => s.id == ID_order).FirstOrDefault();
            var taxi =  db.Cars.Where(s => s.id == ID_taxi).FirstOrDefault();

            order.CarID = taxi.id;
            order.state = "в процесі";
            taxi.state = "зайнятий";

            db.Entry(order).State = EntityState.Modified;
            db.Entry(taxi).State = EntityState.Modified;
            db.SaveChanges();
            //success
            return View();
        }

        public ActionResult MapCars()
        {
            var listCars = db.Cars.ToList();
            return View(listCars);
        }

        public ActionResult ChangeTaxiState(int ID)
        {
            var car = db.Cars.Where(s => s.id == ID).FirstOrDefault();

            return View(car);
        }

        public ActionResult ConfirmTaxiState(int ID_taxi, string State)
        {
            var order = db.orders.Where(s => s.Car.id == ID_taxi && s.state == "в процесі").FirstOrDefault();
            if (order != null)
            {
                order.state = "виконано";
                db.Entry(order).State = EntityState.Modified;
            }
            var car = db.Cars.Where(s => s.id == ID_taxi).FirstOrDefault();
            
            car.state = State;
            
            db.Entry(car).State = EntityState.Modified;
            db.SaveChanges();

            return View();
        }

        public ActionResult History()
        {
            var listOrders = db.orders.Where(s=>s.state =="виконано").ToList();

            return View(listOrders);
        }

        public ActionResult Settings()
        {
            var price = db.RoadPrices.FirstOrDefault();
            return View(price);
        }

        public ActionResult ChangeSettings(string NewValue)
        {
            var price = db.RoadPrices.FirstOrDefault();
            price.value = (float)Convert.ToDouble(NewValue);

            db.Entry(price).State = EntityState.Modified;
            db.SaveChanges();

            return RedirectToAction("Settings","Admin");
        }
	}
}