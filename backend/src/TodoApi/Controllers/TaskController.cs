using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApi.Data;
using TodoApi.Models;

namespace TodoApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TaskController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TaskController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Task
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaskItem>>> GetTasks()
        {
            return await _context.Tasks.ToListAsync();
        }

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<TaskItem>> CreateTask(TaskItem task)
        {
            task.TaskId = Guid.NewGuid();  // Generate Guid here (safe from frontend input)
            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTasks), new { id = task.TaskId }, task);
        }

        // PUT: api/Task/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTask(Guid id, TaskItem task)
        {
            var existingTask = await _context.Tasks.FindAsync(id);
            if (existingTask == null)
                return NotFound();

            existingTask.Title = task.Title;
            existingTask.Description = task.Description;
            existingTask.Completed = task.Completed;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/Task/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTask(Guid id)
        {
            var task = await _context.Tasks.FindAsync(id);
            if (task == null)
                return NotFound();

            _context.Tasks.Remove(task);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
