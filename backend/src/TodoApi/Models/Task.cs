using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TodoApi.Models
{
    public class TaskItem
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]  // Auto-generate TaskId
        public Guid TaskId { get; set; }

        public string Title { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        public bool Completed { get; set; }
    }
}
