using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(GPS_Taxi.Startup))]
namespace GPS_Taxi
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
