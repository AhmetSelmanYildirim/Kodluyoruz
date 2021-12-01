﻿using AutoMapper;
using Imdb_Clone.Application.ActorOperations.Commands;
using Imdb_Clone.Application.ActorOperations.Queries;
using Imdb_Clone.Application.DirectorOperations.Commands;
using Imdb_Clone.Application.DirectorOperations.Queries;
using Imdb_Clone.Application.GenreOperations.Commands;
using Imdb_Clone.Application.GenreOperations.Queries;
using Imdb_Clone.Application.MovieOperations.Commands;
using Imdb_Clone.Application.MovieOperations.Queries;
using Imdb_Clone.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Imdb_Clone.DbOperations
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // MOVIE
            CreateMap<MovieActor, MovieActorsDTO>()
                .ForMember(dto => dto.Fullname, opt => opt.MapFrom(x => x.Actor.Fullname));

            CreateMap<Movie, MoviesVM>()
                .ForMember(dest => dest.Genre, opt => opt.MapFrom(src => src.Genre.Name))
                .ForMember(dest => dest.Director, opt => opt.MapFrom(src => src.Director.Fullname));

            CreateMap<CreateMovieVM, Movie>();

            // GENRE
            CreateMap<Movie, MovieNamesDTO>();
            CreateMap<Genre, GenresVM>();

            CreateMap<CreateGenreVM, Genre>();

            // DIRECTOR
            CreateMap<Director, DirectorsVM>();
            CreateMap<CreateDirectorVM, Director>();

            // ACTOR
            CreateMap<MovieActor, ActorMoviesDTO>()
                .ForMember(dto => dto.Name, opt => opt.MapFrom(x => x.Movie.Name));
            CreateMap<Actor, ActorsVM>();
            CreateMap<CreateActorVM, Actor>();


        }
    }
}