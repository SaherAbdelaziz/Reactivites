using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions Options):base(Options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder builder){
            builder.Entity<Value>().HasData(
                new Value {Id = 1 , Name="First Name"},
                new Value {Id = 2 , Name="Second Name"},
                new Value {Id = 3 , Name="Third Name"},
                new Value {Id = 4 , Name="Foruth Name"}
            );
        }

        public DbSet<Value> Values { get; set; }
    }
}
    