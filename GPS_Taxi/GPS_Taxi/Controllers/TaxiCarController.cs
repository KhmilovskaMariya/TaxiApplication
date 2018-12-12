using GPS_Taxi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AutoMapper;
using GPS_Taxi.ViewModel;

namespace GPS_Taxi.Controllers
{
    public class TaxiCarController : Controller
    {
        TaxiDB db = new TaxiDB();
        // GET: /TaxiCar/

        public ActionResult Freetaxi(int ID)
        {
            Mapper.CreateMap<Car, FreeCar>();
            List<Car> listCar = db.Cars.Where(s => s.state == "вільний").Select(s=>s).ToList();
            List<FreeCar> maplistCar = new List<FreeCar>();

            var client = db.orders.Where(s => s.id == ID).FirstOrDefault();
            var tmpCar = new Car()
            {
                Name = "Клієнт",
                Car1 = client.start_location
            };
            var objCar = Mapper.Map<Car, FreeCar>(tmpCar);
            maplistCar.Add(objCar); //First client

            if (listCar.Any())
            {
                foreach (var car in listCar)
                {
                    var obj = Mapper.Map<Car, FreeCar>(car);
                    maplistCar.Add(obj);
                }
            }
            return Json(maplistCar, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetAllTaxi()
        {
            Mapper.CreateMap<Car, FreeCar>();
            List<Car> listCar = db.Cars.ToList();
            List<FreeCar> maplistCar = new List<FreeCar>();

            if (listCar.Any())
            {
                foreach (var car in listCar)
                {
                    var obj = Mapper.Map<Car, FreeCar>(car);
                    maplistCar.Add(obj);
                }
            }
            return Json(maplistCar, JsonRequestBehavior.AllowGet);
        }

	}
}