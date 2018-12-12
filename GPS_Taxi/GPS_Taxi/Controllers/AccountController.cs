using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Owin.Security;
using GPS_Taxi.Models;
using System.Web.Security;

namespace GPS_Taxi.Controllers
{
    public class AccountController : Controller
    {
        TaxiDB db = new TaxiDB();

        // GET: /Account/Login
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult SignIn(string login, string password)
        {
            var tmpAdmin = db.users.Where(s => s.login == login &&
                    s.password == password).FirstOrDefault();

            if (tmpAdmin == null)
            {
                return RedirectToAction("Login", "Account");
            }
            else
            {
                FormsAuthentication.SetAuthCookie(login, false);
                return RedirectToAction("OrderCurrent","Admin");
            }
        }

        public ActionResult LogOut()
        {
            FormsAuthentication.SignOut();
            return RedirectToAction("Login","Account");
        }

    }
}