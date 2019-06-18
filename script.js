// get content profile
function profile() {
	document.querySelector('.content').innerHTML =`
		<h1>PROFILE</h1>
  		 <br><br>
		 </p>
			<table cellspacing="8">
						<tr>
							<td>Nama</td>
							<td>:</td>
							<td>Tilis Tiadi</td>
						</tr>
						<tr>
							<td valign="top">Alamat</td>
							<td valign="top"> : </td>
							<td >Tirtohargo Bantul  <br> Yogyakarta</td>
						</tr>
					</table>
			 </p>
		`
}

// load first profile
profile()

// get content contact
function contact() {
	document.querySelector('.content').innerHTML = `
		<h1>CONTACTS</h1>
  		 <br><br>
		 </p>
			<table cellspacing="8">
						<tr>
							<td>WA</td>
							<td>:</td>
							<td>082330490855</td>
						</tr>
						<tr>
							<td valign="top">Email</td>
							<td valign="top"> : </td>
							<td >tiliztiadi@gmail.com</td>
						</tr>
					</table>
			 </p>
		`
}

// get social contact
function social() {
	document.querySelector('.content').innerHTML =`
		<h1>SOCIALS</h1>
  		 <br><br>
		 </p>
			<table cellspacing="8">
						<tr>
							<td>FB</td>
							<td>:</td>
							<td><a href="https://www.facebook.com/0x566F4e" target="_blank">Von</a></td>
						</tr>
						<tr>
							<td valign="top">IG</td>
							<td valign="top">:</td>
							<td ><a href="https://www.instagram.com/von_0x56/" target="_blank">@von_0x56</a></td>
						</tr>
						<tr>
							<td valign="top">Web</td>
							<td valign="top">:</td>
							<td><a href="https://www.tempatbelajar.org" target="_blank">tempatbelajar.org</a></td>
						</tr>
						<tr>
							<td valign="top">Github</td>
							<td valign="top">:</td>
							<td><a href="https://www.github.com/ninjas007" target="_blank">ninjas007</a></td>
						</tr>
					</table>
			 </p>
		`
}