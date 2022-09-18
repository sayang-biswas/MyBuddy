using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace MyBuddy.DbModels
{
    public partial class MyBuddyDBContext : DbContext
    {
        public MyBuddyDBContext()
        {
        }

        public MyBuddyDBContext(DbContextOptions<MyBuddyDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<MstExpenseCategory> MstExpenseCategories { get; set; }
        public virtual DbSet<MstQlink> MstQlinks { get; set; }
        public virtual DbSet<MstQlinksCategory> MstQlinksCategories { get; set; }
        public virtual DbSet<TranExpensesList> TranExpensesLists { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<MstExpenseCategory>(entity =>
            {
                entity.ToTable("mst_expense_category");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasColumnType("character varying")
                    .HasColumnName("name");
            });

            modelBuilder.Entity<MstQlink>(entity =>
            {
                entity.ToTable("mst_qlinks");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("id");

                entity.Property(e => e.MstQlinksCategoryId).HasColumnName("mst_qlinks_category_id");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnType("character varying")
                    .HasColumnName("name");

                entity.Property(e => e.Url)
                    .IsRequired()
                    .HasColumnType("character varying")
                    .HasColumnName("url");

                entity.HasOne(d => d.MstQlinksCategory)
                    .WithMany(p => p.MstQlinks)
                    .HasForeignKey(d => d.MstQlinksCategoryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("mst_qlinks_category_id_fk");
            });

            modelBuilder.Entity<MstQlinksCategory>(entity =>
            {
                entity.ToTable("mst_qlinks_category");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("id");

                entity.Property(e => e.Description)
                    .HasColumnType("character varying")
                    .HasColumnName("description");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnType("character varying");

                entity.Property(e => e.SortOrder).HasColumnName("sort_order");
            });

            modelBuilder.Entity<TranExpensesList>(entity =>
            {
                entity.ToTable("tran_expenses_list");

                entity.Property(e => e.Id)
                    .HasColumnType("character varying")
                    .HasColumnName("id");

                entity.Property(e => e.Category).HasColumnName("category");

                entity.Property(e => e.CreatedBy)
                    .HasColumnType("character varying")
                    .HasColumnName("created_by");

                entity.Property(e => e.CreatedTime)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_time");

                entity.Property(e => e.Description)
                    .HasColumnType("character varying")
                    .HasColumnName("description");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.HasOne(d => d.CategoryNavigation)
                    .WithMany(p => p.TranExpensesLists)
                    .HasForeignKey(d => d.Category)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("category_fk");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
