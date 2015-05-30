var xml = {};
// 路線検索①
function setMenuItem1(type,code){

	var s = document.getElementsByTagName("head")[0].appendChild(document.createElement("script"));
	s.type = "text/javascript";
	s.charset = "utf-8";

	var optionIndex0 = document.getElementById('StuffMasterS01').options.length;	//沿線のOPTION数取得
	var optionIndex1 = document.getElementById('StuffMasterS11').options.length;	//駅のOPTION数取得
	//var optionIndex2 = document.form.data[StuffMaster][s2_1].options.length;	//駅のOPTION数取得

	if (type == 0){
		for ( i=0 ; i <= optionIndex0 ; i++ ){document.getElementById('StuffMasterS01').options[0]=null;}	//沿線削除
		for ( i=0 ; i <= optionIndex1 ; i++ ){
			document.getElementById('StuffMasterS11').options[0]=null;
			document.getElementById('StuffMasterS21').options[0]=null;
		}	//駅削除
		document.getElementById('StuffMasterS11').options[0] = new Option("----",0);	//駅OPTIONを空に
		document.getElementById('StuffMasterS21').options[0] = new Option("----",0);	//駅OPTIONを空に

		if (code == 0){
			document.getElementById('StuffMasterS01').options[0] = new Option("----",0);	//沿線OPTIONを空に
		}else{
			s.src = "http://www.ekidata.jp/api/p/" + code + ".json";	//沿線JSONデータURL
		}
	}else{
		for ( i=0 ; i <= optionIndex1 ; i++ ){
			document.getElementById('StuffMasterS11').options[0]=null;
			document.getElementById('StuffMasterS21').options[0]=null;
		}	//駅削除
		if (code == 0){
			document.getElementById('StuffMasterS11').options[0] = new Option("----",0);	//駅OPTIONを空に
			document.getElementById('StuffMasterS21').options[0] = new Option("----",0);	//駅OPTIONを空に
		}else{
			s.src = "http://www.ekidata.jp/api/l/" + code + ".json";	//駅JSONデータURL
		}
	}

	xml.onload = function(data){
		var line = data["line"];
		var station_l = data["station_l"];
		if(line != null){
			document.getElementById('StuffMasterS01').options[0] = new Option("----",0);	//OPTION1番目はNull
			for( i=0; i<line.length; i++){
				ii = i + 1	//OPTIONは2番目から表示
				var op_line_name = line[i].line_name;
				var op_line_cd = line[i].line_cd;
				document.getElementById('StuffMasterS01').options[ii] = new Option(op_line_name,op_line_cd);
			}
		}
		if(station_l != null){
			document.getElementById('StuffMasterS11').options[0] = new Option("----",0);	//OPTION1番目はNull
			document.getElementById('StuffMasterS21').options[0] = new Option("----",0);	//OPTION1番目はNull
			for( i=0; i<station_l.length; i++){
				ii = i + 1	//OPTIONは2番目から表示
				var op_station_name = station_l[i].station_name;
				var op_station_cd = station_l[i].station_cd;
				document.getElementById('StuffMasterS11').options[ii] = new Option(op_station_name,op_station_cd);
				document.getElementById('StuffMasterS21').options[ii] = new Option(op_station_name,op_station_cd);	//***
			}
		}
	}
}
// 路線検索②
function setMenuItem2(type,code){

	var s = document.getElementsByTagName("head")[0].appendChild(document.createElement("script"));
	s.type = "text/javascript";
	s.charset = "utf-8";

	var optionIndex0 = document.getElementById('StuffMasterS02').options.length;	//沿線のOPTION数取得
	var optionIndex1 = document.getElementById('StuffMasterS12').options.length;	//駅のOPTION数取得
	//var optionIndex2 = document.getElementById('StuffMasterS22').options.length;	//駅のOPTION数取得

	if (type == 0){
		for ( i=0 ; i <= optionIndex0 ; i++ ){document.getElementById('StuffMasterS02').options[0]=null}	//沿線削除
		for ( i=0 ; i <= optionIndex1 ; i++ ){
			document.getElementById('StuffMasterS12').options[0]=null;
			document.getElementById('StuffMasterS22').options[0]=null;
		}	//駅削除
		document.getElementById('StuffMasterS12').options[0] = new Option("----",0);	//駅OPTIONを空に
		document.getElementById('StuffMasterS22').options[0] = new Option("----",0);	//駅OPTIONを空に

		if (code == 0){
			document.getElementById('StuffMasterS02').options[0] = new Option("----",0);	//沿線OPTIONを空に
		}else{
			s.src = "http://www.ekidata.jp/api/p/" + code + ".json";	//沿線JSONデータURL
		}
	}else{
		for ( i=0 ; i <= optionIndex1 ; i++ ){
			document.getElementById('StuffMasterS12').options[0]=null;
			document.getElementById('StuffMasterS22').options[0]=null;
		}	//駅削除
		if (code == 0){
			document.getElementById('StuffMasterS12').options[0] = new Option("----",0);	//駅OPTIONを空に
			document.getElementById('StuffMasterS22').options[0] = new Option("----",0);	//駅OPTIONを空に
		}else{
			s.src = "http://www.ekidata.jp/api/l/" + code + ".json";	//駅JSONデータURL
		}
	}

	xml.onload = function(data){
		var line = data["line"];
		var station_l = data["station_l"];
		if(line != null){
			document.getElementById('StuffMasterS02').options[0] = new Option("----",0);	//OPTION1番目はNull
			for( i=0; i<line.length; i++){
				ii = i + 1	//OPTIONは2番目から表示
				var op_line_name = line[i].line_name;
				var op_line_cd = line[i].line_cd;
				document.getElementById('StuffMasterS02').options[ii] = new Option(op_line_name,op_line_cd);
			}
		}
		if(station_l != null){
			document.getElementById('StuffMasterS12').options[0] = new Option("----",0);	//OPTION1番目はNull
			document.getElementById('StuffMasterS22').options[0] = new Option("----",0);	//OPTION1番目はNull
			for( i=0; i<station_l.length; i++){
				ii = i + 1	//OPTIONは2番目から表示
				var op_station_name = station_l[i].station_name;
				var op_station_cd = station_l[i].station_cd;
				document.getElementById('StuffMasterS12').options[ii] = new Option(op_station_name,op_station_cd);
				document.getElementById('StuffMasterS22').options[ii] = new Option(op_station_name,op_station_cd);	//***
			}
		}
	}
}
// 路線検索③
function setMenuItem3(type,code){

	var s = document.getElementsByTagName("head")[0].appendChild(document.createElement("script"));
	s.type = "text/javascript";
	s.charset = "utf-8";

	var optionIndex0 = document.getElementById('StuffMasterS03').options.length;	//沿線のOPTION数取得
	var optionIndex1 = document.getElementById('StuffMasterS13').options.length;	//駅のOPTION数取得
	//var optionIndex2 = document.getElementById('StuffMasterS23').options.length;	//駅のOPTION数取得

	if (type == 0){
		for ( i=0 ; i <= optionIndex0 ; i++ ){document.getElementById('StuffMasterS03').options[0]=null}	//沿線削除
		for ( i=0 ; i <= optionIndex1 ; i++ ){
			document.getElementById('StuffMasterS13').options[0]=null;
			document.getElementById('StuffMasterS23').options[0]=null;
		}	//駅削除
		document.getElementById('StuffMasterS13').options[0] = new Option("----",0);	//駅OPTIONを空に
		document.getElementById('StuffMasterS23').options[0] = new Option("----",0);	//駅OPTIONを空に

		if (code == 0){
			document.getElementById('StuffMasterS03').options[0] = new Option("----",0);	//沿線OPTIONを空に
		}else{
			s.src = "http://www.ekidata.jp/api/p/" + code + ".json";	//沿線JSONデータURL
		}
	}else{
		for ( i=0 ; i <= optionIndex1 ; i++ ){
			document.getElementById('StuffMasterS13').options[0]=null;
			document.getElementById('StuffMasterS23').options[0]=null;
		}	//駅削除
		if (code == 0){
			document.getElementById('StuffMasterS13').options[0] = new Option("----",0);	//駅OPTIONを空に
			document.getElementById('StuffMasterS23').options[0] = new Option("----",0);	//駅OPTIONを空に
		}else{
			s.src = "http://www.ekidata.jp/api/l/" + code + ".json";	//駅JSONデータURL
		}
	}

	xml.onload = function(data){
		var line = data["line"];
		var station_l = data["station_l"];
		if(line != null){
			document.getElementById('StuffMasterS03').options[0] = new Option("----",0);	//OPTION1番目はNull
			for( i=0; i<line.length; i++){
				ii = i + 1	//OPTIONは2番目から表示
				var op_line_name = line[i].line_name;
				var op_line_cd = line[i].line_cd;
				document.getElementById('StuffMasterS03').options[ii] = new Option(op_line_name,op_line_cd);
			}
		}
		if(station_l != null){
			document.getElementById('StuffMasterS13').options[0] = new Option("----",0);	//OPTION1番目はNull
			document.getElementById('StuffMasterS23').options[0] = new Option("----",0);	//OPTION1番目はNull
			for( i=0; i<station_l.length; i++){
				ii = i + 1	//OPTIONは2番目から表示
				var op_station_name = station_l[i].station_name;
				var op_station_cd = station_l[i].station_cd;
				document.getElementById('StuffMasterS13').options[ii] = new Option(op_station_name,op_station_cd);
				document.getElementById('StuffMasterS23').options[ii] = new Option(op_station_name,op_station_cd);	//***
			}
		}
	}
}