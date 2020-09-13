using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Activities {
    public class Delete {
        public class Command : IRequest {
            public Guid Id { get; set; }

        }

        public class Handler : IRequestHandler<Command> {
            private readonly DataContext _Context;
            public Handler (DataContext Context) {
                _Context = Context;
            }

            public async Task<Unit> Handle (Command request, CancellationToken cancellationToken) {

                var activity = await _Context.Activities.FindAsync(request.Id);

                if(activity == null)
                    throw new Exception("Could not find activity");

                _Context.Remove(activity);
                var success = await _Context.SaveChangesAsync () > 0;

                if (success)
                    return Unit.Value;

                throw new Exception ("Problem saving changes");

            }
        }
    }
}