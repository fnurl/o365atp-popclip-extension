#!/usr/bin/env node

/**
 * Source: https://www.o365atp.com/o365atp.js
 */
function generate_decode_url(safelink) {
  let url_parts = safelink.split("?")[1];
  let params = url_parts.split("&");
  let target_url = "Error: Couldn't find target URL.";

  let namval;
  for(n=0;n<params.length;n++) {
    namval = params[n].split("=");
    if(namval[0]=="url") target_url = namval[1];
  }
  
  let decode_url = decodeURIComponent(target_url);
  return decode_url;
}

console.log(generate_decode_url(process.env.POPCLIP_TEXT));
