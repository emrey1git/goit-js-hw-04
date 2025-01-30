const profile = {
	username: "Jacob",
    playTime: 300,
  
    // username'ı değiştiren method
    changeUsername: function (newName) {
        this.username = newName;
    },
    // playTime'ı artıran method
    updatePlayTime: function (hours) {
        this.playTime += hours
    },
      // Kullanıcı bilgilerini döndüren method
    getInfo: function() {
    return `${this.username} has ${this.playTime} active hours!`;  // Profil bilgilerini formatlı bir şekilde döndürüyoruz
  }
};
// Test kodları
console.log(profile.getInfo()); // "Jacob has 300 active hours!" 

profile.changeUsername("Marco");  // Kullanıcı adını "Marco" olarak değiştiriyoruz
console.log(profile.getInfo()); // "Marco has 300 active hours!" 

profile.updatePlayTime(20);  // 20 saat ekliyoruz
console.log(profile.getInfo()); // "Marco has 320 active hours!"