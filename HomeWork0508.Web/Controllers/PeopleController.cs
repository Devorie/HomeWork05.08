using HomeWork0508.Data;
using HomeWork0508.Web.NewFolder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HomeWork0508.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {

        private string _connectionString;

        public PeopleController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [Route("addperson")]
        [HttpPost]
        public void Add(Person person)
        {
            var repo = new PeopleRepository(_connectionString);
            repo.Add(person);
        }

        [HttpPost]
        [Route("updatestatus")]
        public void UpdateStatus(PersonViewModel viewModel)
        {
            var manager = new PeopleRepository(_connectionString);
            manager.UpdateStatus(viewModel.Id, viewModel.Status);
        }

        [HttpGet]
        [Route("getpeople")]
        public List<Person> GetAll()
        {
            var repo = new PeopleRepository(_connectionString);
            return repo.GetAll();
        }

        [HttpGet]
        [Route("get")]
        public Person Get(int id)
        {
            var repo = new PeopleRepository(_connectionString);
            return repo.GetPerson(id);
        }
    }
}
