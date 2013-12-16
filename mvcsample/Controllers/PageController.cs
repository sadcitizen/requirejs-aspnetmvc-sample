using System.Web.Mvc;

namespace mvcsample.Controllers
{
    using Models;

    public class PageController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Page Index";

            return View(new PageModel
                            {
                                Element = "p",
                                Text = "Этот текст я хочу поместить на страницу"
                            });
        }
    }
}
