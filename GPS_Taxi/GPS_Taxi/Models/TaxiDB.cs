namespace GPS_Taxi.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class TaxiDB : DbContext
    {
        public TaxiDB()
            : base("name=TaxiDB")
        {
        }

        public virtual DbSet<capcha> capchas { get; set; }
        public virtual DbSet<Car> Cars { get; set; }
        public virtual DbSet<order> orders { get; set; }
        public virtual DbSet<RoadPrice> RoadPrices { get; set; }
        public virtual DbSet<user> users { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<capcha>()
                .HasMany(e => e.orders)
                .WithOptional(e => e.capcha)
                .HasForeignKey(e => e.id_capcha);

            modelBuilder.Entity<user>()
                .HasMany(e => e.orders)
                .WithOptional(e => e.user)
                .HasForeignKey(e => e.id_employee);
        }
    }
}
