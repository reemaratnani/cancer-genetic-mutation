// // var ClassTypeChart = dc.rowChart("#ClassType");
// // url = "http://bioinfo.ibp.ac.cn/biocircos/document/genome_resource/karyotype.human.hg19_genome.js"
// // d3.json("url").then(function(data){
// // console.log(data);
//     var BioCircos01 = d3.select('#biocircos')
//     BioCircos01 = new BioCircos(BioCircosGenome,{
//         target : "biocircos",                       // Main configuration "target"
//         svgWidth : 900,                             // Main configuration "svgWidth"
//         svgHeight : 600,                            // Main configuration "svgHeight"
//         chrPad : 0.04,                              // Main configuration "chrPad"
//         innerRadius: 246,                           // Main configuration "innerRadius"
//         outerRadius: 270,                           // Main configuration "outerRadius"

//         ticks : {
//             "display" : true,
//             "len" : 5,
//             "color" : "#000",
//             "textSize" : 10,
//             "textColor" : "#000",
//             "scale" : 30000000
//          },
//          genomeLabel : {
//             "display" : true,
//             "textSize" : 15,
//             "textColor" : "#fff",
//             "dx" : 0.028,
//             "dy" : "-0.55em"
//          },
//      });
//      BioCircos01.draw_genome(BioCircos01.genomeLength);


//      var BioCircosGenome = [
//         ["1" , 249250621],
//         ["2" , 243199373],
//         ["3" , 198022430],
//         ["4" , 191154276],
//         ["5" , 180915260],
//         ["6" , 171115067],
//         ["7" , 159138663],
//         ["8" , 146364022],
//         ["9" , 141213431],
//         ["10" , 135534747],
//         ["11" , 135006516],
//         ["12" , 133851895],
//         ["13" , 115169878],
//         ["14" , 107349540],
//         ["15" , 102531392],
//         ["16" , 90354753],
//         ["17" , 81195210],
//         ["18" , 78077248],
//         ["19" , 59128983],
//         ["20" , 63025520],
//         ["21" , 48129895],
//         ["22" , 51304566],
//         ["X" , 155270560],
//         ["Y" , 59373566]
//      ];
//      BioCircos01 = new BioCircos(SCATTER01,SCATTER02,SCATTER03,BioCircosGenome,{
//         target : "biocircos",
//         svgWidth : 900,
//         svgHeight : 600,
//         chrPad : 0.04,
//         innerRadius: 246,
//         outerRadius: 270,
//         zoom : true,
//         genomeFillColor: ["#FFFFCC", "#CCFFFF", "#FFCCCC", "#CCCC99","#0099CC", "#996699", "#336699", "#FFCC33","#66CC00"],
//         SCATTERMouseOverDisplay : true,
//         SCATTERMouseOverTooltipsHtml01 : "chr : ",
//         SCATTERMouseOverTooltipsHtml02 : "<br>start : ",
//         SCATTERMouseOverTooltipsHtml03 : "<br>end : ",
//         SCATTERMouseOverTooltipsHtml04 : "<br>name : ",
//         SCATTERMouseOverTooltipsHtml05 : "<br>cancer : ",
//         SCATTERMouseOverTooltipsHtml06 : "",
//         SCATTERMouseOverTooltipsPosition : "absolute",
//         SCATTERMouseOverTooltipsBackgroundColor : "#D1EEEE",
//         SCATTERMouseOverTooltipsBorderStyle : "solid",
//         SCATTERMouseOverTooltipsBorderWidth : 0,
//         SCATTERMouseOverTooltipsPadding : "3px",
//         SCATTERMouseOverTooltipsBorderRadius : "5px",
//         SCATTERMouseOverTooltipsOpacity : 0.7,
//         SCATTERMouseOutDisplay : true,
//         SCATTERMouseOutAnimationTime : 800,
//         SCATTERMouseOutColor : "none",
//         SCATTERMouseOutCircleSize : "none",
//         SCATTERMouseOutCircleStrokeWidth : 0,
//      });
//      BioCircos01.draw_genome(BioCircos01.genomeLength);