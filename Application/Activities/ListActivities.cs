using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistance;
using Microsoft.EntityFrameworkCore;
using System;
using AutoMapper;

namespace Application.Activities
{
    public class ListActivities
    {
        public class Query : IRequest<List<ActivityDto>> { }

        public class Handler : IRequestHandler<Query, List<ActivityDto>>
        {
            private readonly IMapper _mapper;

            private readonly DataContext _context;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<List<ActivityDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var activities = await _context.Activities
                    .ToListAsync();

                return _mapper.Map<List<Activity>,List<ActivityDto>>(activities);
            }


        }
    }
}