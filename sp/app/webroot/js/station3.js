var xml = {};
// 路線検索①
function setMenuItem1(type,code){

	var s = document.getElementsByTagName("head")[0].appendChild(document.createElement("script"));
	s.type = "text/javascript";
	s.charset = "utf-8";

	var optionIndex0 = document.getElementById('StaffMasterS01').options.length;	//沿線のOPTION数取得
	var optionIndex1 = document.getElementById('StaffMasterS11').options.length;	//駅のOPTION数取得
	//var optionIndex2 = document.form.data[StaffMaster][s2_1].options.length;	//駅のOPTION数取得

	if (type == 0){
		for ( i=0 ; i <= optionIndex0 ; i++ ){document.getElementById('StaffMasterS01').options[0]=null;}	//沿線削除
		for ( i=0 ; i <= optionIndex1 ; i++ ){
			document.getElementById('StaffMasterS11').options[0]=null;
			document.getElementById('StaffMasterS21').options[0]=null;
		}	//駅削除
		document.getElementById('StaffMasterS11').options[0] = new Option("----",0);	//駅OPTIONを空に
		document.getElementById('StaffMasterS21').options[0] = new Option("----",0);	//駅OPTIONを空に

		if (code == 0){
			document.getElementById('StaffMasterS01').options[0] = new Option("----",0);	//沿線OPTIONを空に
		}else{
			s.src = "http://www.ekidata.jp/api/p/" + code + ".json";	//沿線JSONデータURL
		}
	}else{
		for ( i=0 ; i <= optionIndex1 ; i++ ){
			document.getElementById('StaffMasterS11').options[0]=null;
			document.getElementById('StaffMasterS21').options[0]=null;
		}	//駅削除
		if (code == 0){
			document.getElementById('StaffMasterS11').options[0] = new Option("----",0);	//駅OPTIONを空に
			document.getElementById('StaffMasterS21').options[0] = new Option("----",0);	//駅OPTIONを空に
		}else{
			s.src = "http://www.ekidata.jp/api/l/" + code + ".json";	//駅JSONデータURL
		}
	}

	xml.onload = function(data){
		var line = data["line"];
		var station_l = data["station_l"];
		if(line != null){
			document.getElementById('StaffMasterS01').options[0] = new Option("----",0);	//OPTION1番目はNull
			for( i=0; i<line.length; i++){
				ii = i + 1	//OPTIONは2番目から表示
				var op_line_name = line[i].line_name;
				var op_line_cd = line[i].line_cd;
				document.getElementById('StaffMasterS01').options[ii] = new Option(op_line_name,op_line_cd);
			}
		}
		if(station_l != null){
			document.getElementById('StaffMasterS11').options[0] = new Option("----",0);	//OPTION1番目はNull
			document.getElementById('StaffMasterS21').options[0] = new Option("----",0);	//OPTION1番目はNull
			for( i=0; i<station_l.length; i++){
				ii = i + 1	//OPTIONは2番目から表示
				var op_station_name = station_l[i].station_name;
				var op_station_cd = station_l[i].station_cd;
				document.getElementById('StaffMasterS11').options[ii] = new Option(op_station_name,op_station_cd);
				document.getElementById('StaffMasterS21').options[ii] = new Option(op_station_name,op_station_cd);	//***
			}
		}
	}
}
// 路線検索②
function setMenuItem2(type,code){

	var s = document.getElementsByTagName("head")[0].appendChild(document.createElement("script"));
	s.type = "text/javascript";
	s.charset = "utf-8";

	var optionIndex0 = document.getElementById('StaffMasterS02').options.length;	//沿線のOPTION数取得
	var optionIndex1 = document.getElementById('StaffMasterS12').options.length;	//駅のOPTION数取得
	//var optionIndex2 = document.getElementById('StaffMasterS22').options.length;	//駅のOPTION数取得

	if (type == 0){
		for ( i=0 ; i <= optionIndex0 ; i++ ){document.getElementById('StaffMasterS02').options[0]=null}	//沿線削除
		for ( i=0 ; i <= optionIndex1 ; i++ ){
			document.getElementById('StaffMasterS12').options[0]=null;
			document.getElementById('StaffMasterS22').options[0]=null;
		}	//駅削除
		document.getElementById('StaffMasterS12').options[0] = new Option("----",0);	//駅OPTIONを空に
		document.getElementById('StaffMasterS22').options[0] = new Option("----",0);	//駅OPTIONを空に

		if (code == 0){
			document.getElementById('StaffMasterS02').options[0] = new Option("----",0);	//沿線OPTIONを空に
		}else{
			s.src = "http://www.ekidata.jp/api/p/" + code + ".json";	//沿線JSONデータURL
		}
	}else{
		for ( i=0 ; i <= optionIndex1 ; i++ ){
			document.getElementById('StaffMasterS12').options[0]=null;
			document.getElementById('StaffMasterS22').options[0]=null;
		}	//駅削除
		if (code == 0){
			document.getElementById('StaffMasterS12').options[0] = new Option("----",0);	//駅OPTIONを空に
			document.getElementById('StaffMasterS22').options[0] = new Option("----",0);	//駅OPTIONを空に
		}else{
			s.src = "http://www.ekidata.jp/api/l/" + code + ".json";	//駅JSONデータURL
		}
	}

	xml.onload = function(data){
		var line = data["line"];
		var station_l = data["station_l"];
		if(line != null){
			document.getElementById('StaffMasterS02').options[0] = new Option("----",0);	//OPTION1番目はNull
			for( i=0; i<line.length; i++){
				ii = i + 1	//OPTIONは2番目から表示
				var op_line_name = line[i].line_name;
				var op_line_cd = line[i].line_cd;
				document.getElementById('StaffMasterS02').options[ii] = new Option(op_line_name,op_line_cd);
			}
		}
		if(station_l != null){
			document.getElementById('StaffMasterS12').options[0] = new Option("----",0);	//OPTION1番目はNull
			document.getElementById('StaffMasterS22').options[0] = new Option("----",0);	//OPTION1番目はNull
			for( i=0; i<station_l.length; i++){
				ii = i + 1	//OPTIONは2番目から表示
				var op_station_name = station_l[i].station_name;
				var op_station_cd = station_l[i].station_cd;
				document.getElementById('StaffMasterS12').options[ii] = new Option(op_station_name,op_station_cd);
				document.getElementById('StaffMasterS22').options[ii] = new Option(op_station_name,op_station_cd);	//***
			}
		}
	}
}
// 路線検索③
function setMenuItem3(type,code){

	var s = document.getElementsByTagName("head")[0].appendChild(document.createElement("script"));
	s.type = "text/javascript";
	s.charset = "utf-8";

	var optionIndex0 = document.getElementById('StaffMasterS03').options.length;	//沿線のOPTION数取得
	var optionIndex1 = document.getElementById('StaffMasterS13').options.length;	//駅のOPTION数取得
	//var optionIndex2 = document.getElementById('StaffMasterS23').options.length;	//駅のOPTION数取得

	if (type == 0){
		for ( i=0 ; i <= optionIndex0 ; i++ ){document.getElementById('StaffMasterS03').options[0]=null}	//沿線削除
		for ( i=0 ; i <= optionIndex1 ; i++ ){
			document.getElementById('StaffMasterS13').options[0]=null;
			document.getElementById('StaffMasterS23').options[0]=null;
		}	//駅削除
		document.getElementById('StaffMasterS13').options[0] = new Option("----",0);	//駅OPTIONを空に
		document.getElementById('StaffMasterS23').options[0] = new Option("----",0);	//駅OPTIONを空に

		if (code == 0){
			document.getElementById('StaffMasterS03').options[0] = new Option("----",0);	//沿線OPTIONを空に
		}else{
			s.src = "http://www.ekidata.jp/api/p/" + code + ".json";	//沿線JSONデータURL
		}
	}else{
		for ( i=0 ; i <= optionIndex1 ; i++ ){
			document.getElementById('StaffMasterS13').options[0]=null;
			document.getElementById('StaffMasterS23').options[0]=null;
		}	//駅削除
		if (code == 0){
			document.getElementById('StaffMasterS13').options[0] = new Option("----",0);	//駅OPTIONを空に
			document.getElementById('StaffMasterS23').options[0] = new Option("----",0);	//駅OPTIONを空に
		}else{
			s.src = "http://www.ekidata.jp/api/l/" + code + ".json";	//駅JSONデータURL
		}
	}

	xml.onload = function(data){
		var line = data["line"];
		var station_l = data["station_l"];
		if(line != null){
			document.getElementById('StaffMasterS03').options[0] = new Option("----",0);	//OPTION1番目はNull
			for( i=0; i<line.length; i++){
				ii = i + 1	//OPTIONは2番目から表示
				var op_line_name = line[i].line_name;
				var op_line_cd = line[i].line_cd;
				document.getElementById('StaffMasterS03').options[ii] = new Option(op_line_name,op_line_cd);
			}
		}
		if(station_l != null){
			document.getElementById('StaffMasterS13').options[0] = new Option("----",0);	//OPTION1番目はNull
			document.getElementById('StaffMasterS23').options[0] = new Option("----",0);	//OPTION1番目はNull
			for( i=0; i<station_l.length; i++){
				ii = i + 1	//OPTIONは2番目から表示
				var op_station_name = station_l[i].station_name;
				var op_station_cd = station_l[i].station_cd;
				document.getElementById('StaffMasterS13').options[ii] = new Option(op_station_name,op_station_cd);
				document.getElementById('StaffMasterS23').options[ii] = new Option(op_station_name,op_station_cd);	//***
			}
		}
	}
}