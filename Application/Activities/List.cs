using System.Collections.Generic;
using System.Threading;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities
{

    public class List
    {
        public class Query : IRequest<List<Activity>> { }

        public class Handler : IRequestHandler<Query, List<Activity>>
        {
            private readonly DataContext _Context;
            public Handler(DataContext Context)
            {
                _Context = Context;
            }

            public async System.Threading.Tasks.Task<List<Activity>> Handle(Query request,
             CancellationToken cancellationToken)
            {
                var activities = await _Context.Activities.ToListAsync();

                return activities;
            }
        }


    }
}