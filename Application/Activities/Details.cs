using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Details
    {
        public class Query : IRequest<Activity>
        {
            public Guid Id { get; set; }
        }

        public class Handelr : IRequestHandler<Query, Activity>
        {
            private readonly DataContext _Context;
            public Handelr(DataContext Context)
            {
                _Context = Context;
            }

            public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
            {
                var activity = await _Context.Activities.FindAsync(request.Id);

                return activity ;
            }
        }
    }
}