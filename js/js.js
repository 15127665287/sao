


window.onload = function () {
						var oNav = document.getElementById('uu');
						var oli = oNav.getElementsByTagName('li');
						
						


						
						
						for(var i=0;i<oli.length;i++){
							
						


							oli[i].onclick = function () {

								
								for(var j=0;j<oli.length;j++){
									oli[j].className = '';

									
								}
								this.className = 'active';
								
								
							}			
						}		
					}






