$(document)
		.ready(
				function() {
					$('.runjs-rating')
							.DataTable(
									{
										"ordering" : true,
										"columns" : [ {
											"orderable" : false
										}, {
											"orderable" : false
										}, {
											"orderable" : false
										}, {
											"orderable" : false
										}, {
											"orderable" : false
										}, {
											"orderable" : false
										}, {
											"orderable" : false
										}, {
											"orderable" : true
										}, {
											"orderable" : false
										}

										],
										initComplete : function() {
											this
													.api()
													.columns(
															'.sentiment-filter')
													.every(
															function() {
																var arraysVl = [];
																var column = this;
																var select = $(
																		'<select><option value=""></option></select>')
																		.appendTo(
																				$(column
																						.header()))
																		.on(
																				'change',
																				function() {
																					var val = $.fn.dataTable.util
																							.escapeRegex($(
																									this)
																									.val());

																					column
																							.search(
																									val ? '^'
																											+ val
																											+ '$'
																											: '',
																									true,
																									false)
																							.draw();
																				});

																column
																		.data()
																		.unique()
																		.sort()
																		.each(
																				function(
																						d,
																						j) {
																					var s = d;
																					d = $(
																							s)
																							.find(
																									".sentimentkw")
																							.text()

																					if ((d)
																							&& (!arraysVl
																									.includes(d))) {
																						select
																								.append('<option value="'
																										+ d
																										+ '">'
																										+ d
																										+ '</option>')
																						arraysVl
																								.push(d);
																					}
																				});
															});
										}
									});
				});

$(document)
		.ready(
				function() {
					$('.runjs')
							.DataTable(
									{
										"ordering" : false,
										initComplete : function() {
											this
													.api()
													.columns(
															'.sentiment-filter')
													.every(
															function() {
																var column = this;
																var select = $(
																		'<select><option value=""></option></select>')
																		.appendTo(
																				$(column
																						.header()))
																		.on(
																				'change',
																				function() {
																					var val = $.fn.dataTable.util
																							.escapeRegex($(
																									this)
																									.val());

																					column
																							.search(
																									val ? '^'
																											+ val
																											+ '$'
																											: '',
																									true,
																									false)
																							.draw();
																				});

																column
																		.data()
																		.unique()
																		.sort()
																		.each(
																				function(
																						d,
																						j) {
																					var s = d;
																					d = $(
																							s)
																							.text()
																					if (d) {
																						select
																								.append('<option value="'
																										+ d
																										+ '">'
																										+ d
																										+ '</option>')
																					}
																				});
															});
										}
									});
				});

var tablefanpage
$(document).ready(
		function() {
			tablefanpage = $('#fbpages-crawl')
					.DataTable(
							{
								"ordering" : true,
								"columns" : [ {
									"orderable" : false
								}, {
									"orderable" : false
								},{
									"orderable" : true
								}, {
									"orderable" : false
								}, {
									"orderable" : false
								}, {
									"orderable" : false
								}, {
									"orderable" : false
								}, {
									"orderable" : false
								}, {
									"orderable" : false
								}

								],
								"sPaginationType": "full_numbers",
								"sDom":'fptipr',
								"lengthMenu": [ 30, 50, 100 ],
								"processing": true,
								"serverSide": true,									
						        "ajax": {
						        	"url": "/kumintest/serverprocessingfanpage",
						        	"type": "POST"						        
						        }
								
							});
			
			$("div#fbpages-crawl_filter").html('<div class="toolbar"><button class="btn btn-primary" onclick="redirectpagefp()">Redirect</button><input class="form-control" type="text" id="page-fanpage"> <button class="btn btn-primary" data-toggle="modal" data-target="#modal_add_link_fanpage" style="margin-left: 50px;">Add Link</button></div>');
		});
function redirectpagefp(){
	var pagenum = parseInt($("#page-fanpage").val())-1;
	tablefanpage.page( pagenum ).draw( 'page' );
}
var tablegroup
$(document).ready(
		function() {
			tablegroup = $('#fbgroups-crawl')
					.DataTable(
							{
								"ordering" : true,
								"columns" : [ {
									"orderable" : false
								}, {
									"orderable" : false
								},{
									"orderable" : true
								}, {
									"orderable" : false
								}, {
									"orderable" : false
								}, {
									"orderable" : false
								}, {
									"orderable" : false
								}, {
									"orderable" : false
								}, {
									"orderable" : false
								}

								],
								"sPaginationType": "full_numbers",
								"sDom":'fptipr',
								"lengthMenu": [ 30, 50, 100 ],
								"processing": true,
								"serverSide": true,										
						        "ajax": {
						        	"url": "/kumintest/serverprocessinggroup",
						        	"type": "POST"
						        
						        }
								
							});
			$("div#fbgroups-crawl_filter").html('<div class="toolbar"><button class="btn btn-primary" onclick="redirectpagegr()">Redirect</button><input class="form-control" type="text" id="page-group"><button class="btn btn-primary" data-toggle="modal" data-target="#modal_add_link_group" style="margin-left: 50px;">Add Link</button></div>');
		});
function redirectpagegr(){
	var pagenum = parseInt($("#page-group").val())-1;
	tablegroup.page( pagenum ).draw( 'page' );
}

var tablegroupclose
$(document).ready(
		function() {
			tablegroupclose = $('#fbgroupsclose-crawl')
					.DataTable(
							{
								"ordering" : true,
								"columns" : [ {
									"orderable" : false
								}, {
									"orderable" : false
								},{
									"orderable" : true
								}, {
									"orderable" : false
								}, {
									"orderable" : false
								}, {
									"orderable" : false
								}, {
									"orderable" : false
								}, {
									"orderable" : false
								}, {
									"orderable" : false
								}

								],
								"sPaginationType": "full_numbers",
								"sDom":'fptipr',
								"lengthMenu": [ 30, 50, 100 ],
								"processing": true,
								"serverSide": true,										
						        "ajax": {
						        	"url": "/kumintest/serverprocessinggroupclose",
						        	"type": "POST"
						        
						        }
								
							});
			$("div#fbgroupsclose-crawl_filter").html('<div class="toolbar"><button class="btn btn-primary" onclick="redirectpagegrc()">Redirect</button><input class="form-control" type="text" id="page-groupclose"> <button class="btn btn-primary" data-toggle="modal" data-target="#modal_add_link" style="margin-left: 50px;">Add Link</button></div>');
		});
function redirectpagegrc(){
	var pagenum = parseInt($("#page-groupclose").val())-1;
	tablegroupclose.page( pagenum ).draw( 'page' );
}

var tableprofiles
$(document).ready(
		function() {
			tableprofiles = $('#fbprofiles-crawl')
					.DataTable(
							{
								"ordering" : true,
								"columns" : [ {
									"orderable" : false
								}, {
									"orderable" : false
								},{
									"orderable" : false
								},{
									"orderable" : false
								},{
									"orderable" : false
								}
								],
								"sPaginationType": "full_numbers",
								"sDom":'fptipr',
								"lengthMenu": [ 5 ],
								"processing": true,
								"serverSide": true,										
						        "ajax": {
						        	"url": "/kumintest/serverprocessingprofiles",
						        	"type": "POST"						        
						        }
								
							});
			$("div#fbprofiles-crawl_filter").html('<div class="toolbar"><button class="btn btn-primary" onclick="redirectpageprofile()">Redirect</button><input class="form-control" type="text" id="page-profile"> <button class="btn btn-primary" data-toggle="modal" data-target="#modal_add_profile" style="margin-left: 50px;">Add Profile</button></div>');
		});
function redirectpageprofile(){
	var pagenum = parseInt($("#page-profile").val())-1;
	tableprofiles.page( pagenum ).draw( 'page' );
}


var tablehashtag
$(document).ready(
		function() {
			tablegroup = $('#fbhashtags-crawl')
					.DataTable(
							{
								"ordering" : true,
								"columns" : [ {
									"orderable" : false
								}, {
									"orderable" : false
								}, {
									"orderable" : true
								}, {
									"orderable" : false
								}, {
									"orderable" : false
								}, {
									"orderable" : false
								}, {
									"orderable" : false
								}, {
									"orderable" : false
								}, {
									"orderable" : false
								}

								],
								"sPaginationType": "full_numbers",
								"sDom":'fptipr',
								"lengthMenu": [ 30, 50, 100 ],
								"processing": true,
								"serverSide": true,										
						        "ajax": {
						        	"url": "/kumintest/serverprocessinghashtag",
						        	"type": "POST"
						        
						        }
								
							});
			$("div#fbhashtags-crawl_filter").html('<div class="toolbar"><button class="btn btn-primary" onclick="redirectpageht()">Redirect</button><input class="form-control" type="text" id="page-hashtag"><button class="btn btn-primary" data-toggle="modal" data-target="#modal_add_link_hashtag" style="margin-left: 50px;">Add Link</button></div>');
		});
function redirectpageht(){
	var pagenum = parseInt($("#page-hashtag").val())-1;
	tablegroup.page( pagenum ).draw( 'page' );
}
/**
 * Dark theme for Highcharts JS
 * 
 * @author Torstein Honsi
 */

// Load the fonts
Highcharts.createElement('link', {
	href : '//fonts.googleapis.com/css?family=Unica+One',
	rel : 'stylesheet',
	type : 'text/css'
}, null, document.getElementsByTagName('head')[0]);

Highcharts.theme = {
	colors : [ "#2b908f", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee",
			"#ff0066", "#eeaaee", "#55BF3B", "#DF5353", "#7798BF", "#aaeeee" ],
	chart : {
		backgroundColor : {
			linearGradient : {
				x1 : 0,
				y1 : 0,
				x2 : 1,
				y2 : 1
			},
			stops : [ [ 0, '#2a2a2b' ], [ 1, '#3e3e40' ] ]
		},
		style : {
			fontFamily : "'Unica One', sans-serif"
		},
		plotBorderColor : '#606063'
	},
	title : {
		style : {
			color : '#E0E0E3',
			textTransform : 'uppercase',
			fontSize : '20px'
		}
	},
	subtitle : {
		style : {
			color : '#E0E0E3',
			textTransform : 'uppercase'
		}
	},
	xAxis : {
		gridLineColor : '#707073',
		labels : {
			style : {
				color : '#E0E0E3'
			}
		},
		lineColor : '#707073',
		minorGridLineColor : '#505053',
		tickColor : '#707073',
		title : {
			style : {
				color : '#A0A0A3'

			}
		}
	},
	yAxis : {
		gridLineColor : '#707073',
		labels : {
			style : {
				color : '#E0E0E3'
			}
		},
		lineColor : '#707073',
		minorGridLineColor : '#505053',
		tickColor : '#707073',
		tickWidth : 1,
		title : {
			style : {
				color : '#A0A0A3'
			}
		}
	},
	tooltip : {
		backgroundColor : 'rgba(0, 0, 0, 0.85)',
		style : {
			color : '#F0F0F0'
		}
	},
	plotOptions : {
		series : {
			dataLabels : {
				color : '#B0B0B3'
			},
			marker : {
				lineColor : '#333'
			}
		},
		boxplot : {
			fillColor : '#505053'
		},
		candlestick : {
			lineColor : 'white'
		},
		errorbar : {
			color : 'white'
		}
	},
	legend : {
		itemStyle : {
			color : '#E0E0E3'
		},
		itemHoverStyle : {
			color : '#FFF'
		},
		itemHiddenStyle : {
			color : '#606063'
		}
	},
	credits : {
		style : {
			color : '#666'
		}
	},
	labels : {
		style : {
			color : '#707073'
		}
	},

	drilldown : {
		activeAxisLabelStyle : {
			color : '#F0F0F3'
		},
		activeDataLabelStyle : {
			color : '#F0F0F3'
		}
	},

	navigation : {
		buttonOptions : {
			symbolStroke : '#DDDDDD',
			theme : {
				fill : '#505053'
			}
		}
	},

	// scroll charts
	rangeSelector : {
		buttonTheme : {
			fill : '#505053',
			stroke : '#000000',
			style : {
				color : '#CCC'
			},
			states : {
				hover : {
					fill : '#707073',
					stroke : '#000000',
					style : {
						color : 'white'
					}
				},
				select : {
					fill : '#000003',
					stroke : '#000000',
					style : {
						color : 'white'
					}
				}
			}
		},
		inputBoxBorderColor : '#505053',
		inputStyle : {
			backgroundColor : '#333',
			color : 'silver'
		},
		labelStyle : {
			color : 'silver'
		}
	},

	navigator : {
		handles : {
			backgroundColor : '#666',
			borderColor : '#AAA'
		},
		outlineColor : '#CCC',
		maskFill : 'rgba(255,255,255,0.1)',
		series : {
			color : '#7798BF',
			lineColor : '#A6C7ED'
		},
		xAxis : {
			gridLineColor : '#505053'
		}
	},

	scrollbar : {
		barBackgroundColor : '#808083',
		barBorderColor : '#808083',
		buttonArrowColor : '#CCC',
		buttonBackgroundColor : '#606063',
		buttonBorderColor : '#606063',
		rifleColor : '#FFF',
		trackBackgroundColor : '#404043',
		trackBorderColor : '#404043'
	},

	// special colors for some of the
	legendBackgroundColor : 'rgba(0, 0, 0, 0.5)',
	background2 : '#505053',
	dataLabelsColor : '#B0B0B3',
	textColor : '#C0C0C0',
	contrastTextColor : '#F0F0F3',
	maskColor : 'rgba(255,255,255,0.3)'
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);

$(function() {
	var date = new Date(2016, 12, 15);
	var now = new Date();
	var diff = (date.getTime() / 1000) - (now.getTime() / 1000);
	var clock = $('.countdown').FlipClock(diff, {
		clockFace : 'HourlyCounter',
		countdown : true
	})
});

$(document).ready(function() {
	$('.slide-about').slick({
		centerMode : true,
		centerPadding : '60px',
		slidesToShow : 3,
		autoplay : true,
		autoplaySpeed : 2000,
		responsive : [ {
			breakpoint : 768,
			settings : {
				arrows : false,
				centerMode : true,
				centerPadding : '40px',
				slidesToShow : 3
			}
		}, {
			breakpoint : 480,
			settings : {
				arrows : false,
				centerMode : true,
				centerPadding : '40px',
				slidesToShow : 1
			}
		} ]
	});
});
// rating sentiment accuracy

var optionrates = {
	max_value : 5,
	step_size : 0.5,
	selected_symbol_type : 'hearts', // Must be a key from symbols
	convert_to_utf8 : false,
	cursor : 'default',
	readonly : false,
	change_once : false, // Determines if the rating can only be set once
	additional_data : {}, // Additional data to send to the server
	only_select_one_symbol : false, // If set to true, only selects the
// hovered/selected symbol and nothing prior
// to it
// update_input_field_name = some input field set by the user
};

$(document).ready(function() {
	if ($(".rate-sentiment").length > 0) {
		$(".rate-sentiment").rate(optionrates);
	}
	$("#tablecontent_paginate").click(function() {
		$(".rate-sentiment").rate(optionrates);
	});
	$("#tablecontent_length").click(function() {
		$(".rate-sentiment").rate(optionrates);
	});
	$("#tablecontent_filter input").bind("input", function() {
		$(".rate-sentiment").rate(optionrates);
	});
	$(".sentiment-filter select").change(function() {
		$(".rate-sentiment").rate(optionrates);
	});
});

function saveRating(e) {
	setTimeout(function() {
		var id = e.getAttribute('id');
		var rate = e.getAttribute('data-rate-value');
		var typeindex = e.getAttribute('type-index');
		var sentimentKw = $(e).parent().parent().find(".sentimentkw").text();
		var keywordsearch = $(".search-keyword-kumin").attr("value");
		$.ajax({
			url : '/kumintest/saveratesentiment',
			data : {
				"id" : id,
				"rate" : rate,
				"type" : typeindex,
				"sentimentvalue" : sentimentKw,
				"keywordsearch" : keywordsearch
			},
			type : 'post',
			cache : false,
			success : function(data) {
			},
			error : function() {
			}
		});
	}, 500);

};
function saveRatingFedb(e) {
	setTimeout(function() {
		var id = e.getAttribute('id');
		var rate = e.getAttribute('data-rate-value');
		var typeindex = e.getAttribute('type-index');
		var sentimentKw = $(e).parent().parent().find(".sentimentkw").text();
		var keywordsearch = $(e).parent().parent().find(".keywordsearch")
				.text();
		$.ajax({
			url : '/kumintest/saveratesentiment',
			data : {
				"id" : id,
				"rate" : rate,
				"type" : typeindex,
				"sentimentvalue" : sentimentKw,
				"keywordsearch" : keywordsearch
			},
			type : 'post',
			cache : false,
			success : function(data) {
			},
			error : function() {
			}
		});
	}, 500);

};

function saveSentiment(e) {
	setTimeout(function() {
		var id = e.getAttribute('id-post');
		var typeindex = e.getAttribute('type-index');
		var keywordsearch = e.getAttribute('keyword-search');
		var idInput = "*[id='" + id + "--" + keywordsearch + "']";
		var idInputTopic = "*[id='" + id + "--" + keywordsearch + "--topic']";
		var sentimentKw = $(idInput).val();
		var topicKw = $(idInputTopic).val();
		$.ajax({
			url : '/kumintest/savesentimentfeedback',
			data : {
				"id" : id,
				"type" : typeindex,
				"sentimentvalue" : sentimentKw,
				"keywordsearch" : keywordsearch,
				"topic" : topicKw
			},
			type : 'post',
			cache : false,
			success : function(data) {
			},
			error : function() {
			}
		});
	}, 500);

};

function fixPerson(e) {
	setTimeout(function() {
		var name = "person";
		
		var checkedValue = ""; 
		var inputElements = document.getElementsByClassName('brandperson');
		for(var i=0; inputElements[i]; ++i){
		      if(inputElements[i].checked){
		           checkedValue = inputElements[i].value+","+checkedValue;		           
		      }
		}
				
		$.ajax({
			url : '/kumintest/savefixbrandrelevant',
			data : {
				"name" : name,
				"data" : checkedValue,				
			},
			type : 'post',
			cache : false,
			success : function(data) {
				var inputElements = document.getElementsByClassName('brandperson');
				for(var i=0; inputElements[i]; ++i){
				      if(inputElements[i].checked){
				           inputElements[i].disabled = true;
				           inputElements[i].parentElement.style.color = "red";
				           inputElements[i].parentElement.style.textDecoration = "line-through";
				      }
				}
			},
			error : function() {
			}
		});
	}, 500);

};

function fixLocation(e) {
	setTimeout(function() {
		var name = "location";
		
		var checkedValue = ""; 
		var inputElements = document.getElementsByClassName('brandlocation');
		for(var i=0; inputElements[i]; ++i){
		      if(inputElements[i].checked){
		           checkedValue = inputElements[i].value+","+checkedValue;		           
		      }
		}
				
		$.ajax({
			url : '/kumintest/savefixbrandrelevant',
			data : {
				"name" : name,
				"data" : checkedValue,				
			},
			type : 'post',
			cache : false,
			success : function(data) {
				var inputElements = document.getElementsByClassName('brandlocation');
				for(var i=0; inputElements[i]; ++i){
				      if(inputElements[i].checked){
				           inputElements[i].disabled = true;
				           inputElements[i].parentElement.style.color = "red";
				           inputElements[i].parentElement.style.textDecoration = "line-through";
				      }
				}
			},
			error : function() {
			}
		});
	}, 500);

};


function fixOrg(e) {
	setTimeout(function() {
		var name = "org";
		
		var checkedValue = ""; 
		var inputElements = document.getElementsByClassName('brandorg');
		for(var i=0; inputElements[i]; ++i){
		      if(inputElements[i].checked){
		           checkedValue = inputElements[i].value+","+checkedValue;		           
		      }
		}
				
		$.ajax({
			url : '/kumintest/savefixbrandrelevant',
			data : {
				"name" : name,
				"data" : checkedValue,				
			},
			type : 'post',
			cache : false,
			success : function(data) {
				var inputElements = document.getElementsByClassName('brandorg');
				for(var i=0; inputElements[i]; ++i){
				      if(inputElements[i].checked){
				           inputElements[i].disabled = true;
				           inputElements[i].parentElement.style.color = "red";
				           inputElements[i].parentElement.style.textDecoration = "line-through";
				      }
				}
			},
			error : function() {
			}
		});
	}, 500);

};

function fixPro(e) {
	setTimeout(function() {
		var name = "pro";
		
		var checkedValue = ""; 
		var inputElements = document.getElementsByClassName('brandpro');
		for(var i=0; inputElements[i]; ++i){
		      if(inputElements[i].checked){
		           checkedValue = inputElements[i].value+","+checkedValue;		           
		      }
		}
				
		$.ajax({
			url : '/kumintest/savefixbrandrelevant',
			data : {
				"name" : name,
				"data" : checkedValue,				
			},
			type : 'post',
			cache : false,
			success : function(data) {
				var inputElements = document.getElementsByClassName('brandpro');
				for(var i=0; inputElements[i]; ++i){
				      if(inputElements[i].checked){
				           inputElements[i].disabled = true;
				           inputElements[i].parentElement.style.color = "red";
				           inputElements[i].parentElement.style.textDecoration = "line-through";
				      }
				}
			},
			error : function() {
			}
		});
	}, 500);

};

var livechart;

function requestDataOffsetPost() {
    var oldNoPostFanpage = $("#numfanpagepost").val();
    var oldNoPostGroup = $("#numgrouppost").val();
$.ajax({
    url: '/kumintest/liveposttime',
    data: {
            "oldNoPostFanpage": oldNoPostFanpage,
            "oldNoPostGroup": oldNoPostGroup
    },
    type: 'post',
    datatype: 'json',
    success: function(point) {
        var series = livechart.series[0],
            shift = series.data.length > 15; // shift if the series is longer
												// than 20

        // add the point
            $("#numfanpagepost").val(parseInt(oldNoPostFanpage)+parseInt(point[0][1]));
            $("#numgrouppost").val(parseInt(oldNoPostGroup)+parseInt(point[1][1]));
            livechart.series[0].addPoint(point[0], false, shift);
            livechart.series[1].addPoint(point[1], true, shift);

        // call it again after one second
        setTimeout(requestDataOffsetPost, 10000);    
    },
    cache: false
   });
 }

var livechartfbpages;

function requestDataOffsetLinkfbpages() {
    
$.ajax({
    url: '/kumintest/servermonitorfanpage',
    data: {           
    },
    type: 'post',
    datatype: 'json',
    success: function(point) {
        var series = livechartfbpages.series[0],
            shift = series.data.length > 15; // shift if the series is longer
												// than 20

        // add the point
            livechartfbpages.series[0].addPoint(point[0], true, shift);
            for(i =1; i<livechartfbpages.series.length;i++)
            	livechartfbpages.series[i].addPoint(point[i], false, shift);

        // call it again after one second
        setTimeout(requestDataOffsetLinkfbpages, 10000);    
    },
    cache: false
   });
 }

var livechartfbgroups;

function requestDataOffsetLinkfbgroups() {
    
$.ajax({
    url: '/kumintest/servermonitorgroup',
    data: {           
    },
    type: 'post',
    datatype: 'json',
    success: function(point) {
        var series = livechartfbgroups.series[0],
            shift = series.data.length > 15; // shift if the series is longer
												// than 20

        // add the point
            livechartfbgroups.series[0].addPoint(point[0], true, shift);
            for(i =1; i<livechartfbgroups.series.length;i++)
            	livechartfbgroups.series[i].addPoint(point[i], false, shift);

        // call it again after one second
        setTimeout(requestDataOffsetLinkfbgroups, 10000);    
    },
    cache: false
   });
 }

function resizeWithTable(e){
	$(e).css("width", "100%");
}

//Remove Link Not Vietnamese
function removeLink(e) {
	setTimeout(function() {
		var id = e.getAttribute("value");
		var databasename = e.getAttribute("name");
		var collectionname = e.getAttribute("data-collection");
		$.ajax({
			url : '/kumintest/removelinkcrawl',
			data : {
				"id": id,
				"databasename": databasename,
				"collectionname" : collectionname
			},
			type : 'post',
			cache : false,
			success : function(data) {
//				alert("Remove Success");
				e.parentElement.parentElement.style.color = "red";
				e.parentElement.parentElement.style.textDecoration = "line-through";
			},
			error : function() {
				alert("Remove Error!");
			}
		});
	}, 500);

};

function removeLinkCloseGroup(e) {
	setTimeout(function() {
		var id = e.getAttribute("value");
		var databasename = e.getAttribute("name");
		var collectionname = "closedgroup";
		$.ajax({
			url : '/kumintest/removelinkcrawl',
			data : {
				"id": id,
				"databasename": databasename,
				"collectionname": collectionname
			},
			type : 'post',
			cache : false,
			success : function(data) {
//				alert("Remove Success");
				e.parentElement.parentElement.style.color = "red";
				e.parentElement.parentElement.style.textDecoration = "line-through";
			},
			error : function() {
				alert("Remove Error!");
			}
		});
	}, 500);

};

function removeProfiles(e) {
	setTimeout(function() {
		var id = e.getAttribute("value");
		var databasename = e.getAttribute("name");
		var collectionname = "fbprofiles";
		$.ajax({
			url : '/kumintest/removeprofilecrawl',
			data : {
				"id": id,
				"databasename": databasename,
				"collectionname": collectionname
			},
			type : 'post',
			cache : false,
			success : function(data) {
//				alert("Remove Success");
				e.parentElement.parentElement.style.color = "red";
				e.parentElement.parentElement.style.textDecoration = "line-through";
			},
			error : function() {
				alert("Remove Error!");
			}
		});
	}, 500);

};

//Add new link Close Group
function addnewgrouplink(e) {
	setTimeout(function() {
		var name = $("#inputname").val();
		var link = $("#inputlink").val();
		var id = $("#inputid").val();
		var descript = $("#inputdescript").val();
		var numberfans = $("#inputnum").val();
		var userfetch = $("#inputuser").val();
		$.ajax({
			url : '/kumintest/addlinkgroupclose',
			data : {
				"name" : name,
				"link"  : link,
				"id": id,
				"descript" : descript,
				"numberfans" : numberfans,
				"userfetch" : userfetch
			},
			type : 'post',
			cache : false,
			success : function(data) {
				//alert("Success!");
				tablegroupclose.page( 0 ).draw( 'page' );
			},
			error : function() {
				alert("Add Error!");
			}
		});
	}, 500);
};

function addnewprofile(e) {
	setTimeout(function() {
		var name = $("#inputnameprofile").val();
		var link = $("#inputlinkprofile").val();		
		var numberfriends = $("#inputnumprofile").val();
		
		$.ajax({
			url : '/kumintest/addprofile',
			data : {
				"name" : name,
				"link"  : link,				
				"numberfriends" : numberfriends,				
			},
			type : 'post',
			cache : false,
			success : function(data) {
				//alert("Success!");
				tableprofiles.page( 0 ).draw( 'page' );
			},
			error : function() {
				alert("Add Error!");
			}
		});
	}, 500);
};

function addnewlinkfanpage(e) {
	setTimeout(function() {
		var name = $("#inputnamefanpage").val();
		var link = $("#inputlinkfanpage").val();		
		var fanpageid = $("#inputidfanpage").val();
		
		$.ajax({
			url : '/kumintest/addlinkfanpage',
			data : {
				"name" : name,
				"link"  : link,				
				"fanpageid" : fanpageid,				
			},
			type : 'post',
			cache : false,
			success : function(data) {
				//alert("Success!");
				tablefanpage.page( 0 ).draw( 'page' );
			},
			error : function() {
				alert("Add Error!");
			}
		});
	}, 500);
};

function addnewlinkgroup(e) {
	setTimeout(function() {
		var name = $("#inputnamegroup").val();
		var link = $("#inputlinkgroup").val();		
		var groupid = $("#inputidgroup").val();
		var groupdescription= $("#inputdescriptiongroup").val();
		var numberfans = $("#inputnumgroup").val();
		
		$.ajax({
			url : '/kumintest/addlinkgroup',
			data : {
				"name" : name,
				"link"  : link,				
				"groupid" : groupid,
				"groupdescription" : groupdescription,
				"numberfans"  : numberfans
			},
			type : 'post',
			cache : false,
			success : function(data) {
				//alert("Success!");
				tablegroup.page( 0 ).draw( 'page' );
			},
			error : function() {
				alert("Add Error!");
			}
		});
	}, 500);
};

function addnewhashtag(e) {
	setTimeout(function() {
		var hashtag = $("#inputhashtag").val();
		var userfetch = $("#inputuserfetchhashtag").val();				
		
		$.ajax({
			url : '/kumintest/addhashtag',
			data : {
				"hashtag" : hashtag,
				"userfetch"  : userfetch,				
			},
			type : 'post',
			cache : false,
			success : function(data) {
				//alert("Success!");
				tablehashtag.page( 0 ).draw( 'page' );
			},
			error : function() {
				alert("Add Error!");
			}
		});
	}, 500);
};

$(document)
.ready(
		function() {			
			setInterval(function() {
				$.ajax({
					url : '/kumintest/loadingtotal',
					data : {
						
					},
					type : 'post',
					cache : false,
					success : function(data) {
						$("div.total-amazing p").text(data);
					},
					error : function() {
						//alert("Add Error!");
					}
				});
			}, 60000)	
		});


