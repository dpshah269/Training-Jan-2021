﻿using BookMyShowAPI.Authentication;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class Admin
    {
        [Key]
        public int AdminId { get; set; }
        public string ContactNo { get; set; }
        public string Password { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }

        //public ApplicationUser Users { get; set; }
        //public string Userid { get; set; }
    }
}
