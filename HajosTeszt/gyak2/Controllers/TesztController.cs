﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace gyak2.Controllers
{
    //[Route("api/[controller]")]
    /*[ApiController]
    public class TesztController : ControllerBase
    {
        [HttpGet]
        [Route("corvinus/szerverido")]
        public IActionResult M1()
        {
            string pontosIdő = DateTime.Now.ToShortTimeString();

            return new ContentResult
            {
                ContentType = System.Net.Mime.MediaTypeNames.Text.Plain,
                Content = pontosIdő
            };

            return BadRequest("Nem jó a bemenő adat");
        }

        [HttpGet]
        [Route("corvinus/nagybetus/{szoveg}")]
        public IActionResult M2(string szoveg)
        {
            string pontosIdő = DateTime.Now.ToShortTimeString();

            return new ContentResult
            {
                ContentType = System.Net.Mime.MediaTypeNames.Text.Plain,
                Content = szoveg.ToUpper()
            };
        }

        
    }*/
}
