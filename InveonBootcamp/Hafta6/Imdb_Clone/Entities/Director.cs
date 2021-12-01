﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Imdb_Clone.Entities
{
    public class Director
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int DirectorId { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Fullname { get => Name + " " + Surname; }
        public virtual ICollection<Movie> Movies { get; set; }

    }
}
