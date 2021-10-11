// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
// kode dibawah akan berjalan tanpa eror
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
// tidak fun 1 akan berbentuk objek dan fun 2 akan berbentuk window
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
// karena pada fun2 menggunakan arrow function yang menghasilkan object kosong
const obj = {
    fun1: function() {
      console.log("fun1", this);
    },
    fun2: () => {
      console.log("fun2", this);
    }
  };
  
  obj.fun1();
  obj.fun2();
  
// soal - 02
// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
// encapsulation adalah metode untuk mengatur akses terhadap property maupun method. encapsulation digunakan untuk menghalangi kode program lain untuk mengubah properti tertentu
// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
// abstraction adalah sebuah teknik untuk menyembunyikan detail tertentu dari sebuah objek/method dan hanya menapilkan fungsionalitas atau fitur penting dari objek tersebut. abstaction dibutuhkan untuk menyederhanakan suatu proses menjadi komponen yang mutlak 
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
// inheritance adalah sebuah proses dimana class mewariskan property dan methodnya ke class lain atau childnya. inheritance digunakan agar ketika kita membuat class yang method dan property yang hampir sama dan hanya menambahkan beberapa kita tidak perlu menulisnya berulang kali cukup menggunakan inheritance dan menambahkan method/property lain yang mendukung
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?
// polymorpishm dimana suatu class meliki banyak bentuk (behavior)  method yang berbeda. polymorphism digunakan untuk suatu method dadpat diproses lebih dari satu bentuk

// soal - 03

class Phone {
    constructor (brand, storage, ram){
        this.brand = brand
        this.storage = storage
        this.ram = ram
    }
    getBrandName(){
        return this.brand
    }

    setBrandName(brand){
        this.brand = String(brand)
    }

    printSpecification (){
        console.log( `Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`)
    }

    setSpecification (storage,ram){
        this.storage = Number(storage)
        this.ram = Number(ram)
    }
}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();

//soal - 04
class Student {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.courseOfferings = [];
    }
  
    takeNewCourse(course) {
      if (this.courseOfferings.length === 0) {
        const courseOffering = new CourseOffering(course);
        this.courseOfferings = [courseOffering];
        course.decreaseQuota();
      } else {
        const isAlreadyExist = this.courseOfferings.find(
          (courseOffering) =>
            courseOffering.course.getSubject() === course.getSubject()
        );
  
        if (isAlreadyExist === undefined) {
          const courseOffering = new CourseOffering(course);
          this.courseOfferings = [...this.courseOfferings, courseOffering];
          course.decreaseQuota();
        }
      }
    }
  
    takeATest(course) {
      const idx = this.courseOfferings.findIndex(
        (courseOffering) =>
          courseOffering.course.getSubject() === course.getSubject()
      );
      if (this.courseOfferings[idx].attendance >= course.getAttendance()) {
        this.courseOfferings[idx].grade = Math.floor(Math.random() * 100);
      } else {
        console.log(
          `please fill your absen ${course.getSubject()}`
        );
      }
    }
  
    courseAttendance(course) {
      const idx = this.courseOfferings.findIndex(
        (courseOffering) =>
          courseOffering.course.getSubject() === course.getSubject()
      );
      this.courseOfferings[idx].attendance += 1;
    }
  }
  
  class CourseOffering {
    constructor(course) {
      this.course = course;
      this.attendance = 0;
      this.grade = 0;
    }
  }
  
  class Course {
    constructor(subject, quota, attendance) {
      this.subject = subject;
      this.quota = quota;
      this.attendance = attendance;
    }
  
    getSubject() {
      return this.subject;
    }
  
    getAttendance() {
      return this.attendance;
    }
  
    decreaseQuota() {
      this.quota -= 1;
    }
  }
  
  const biology = new Course('biology', 10, 3);
  const physics = new Course('physics', 10, 2);
  
  const johnWatson = new Student('john watson', 'male');
  
  johnWatson.takeNewCourse(biology);
  johnWatson.takeNewCourse(physics);
  
  johnWatson.courseAttendance(physics);
  johnWatson.courseAttendance(physics);
  johnWatson.courseAttendance(biology);
  johnWatson.courseAttendance(physics);
  
  console.log(biology.quota);
  console.log(physics.quota);
  
  johnWatson.takeATest(biology);
  johnWatson.takeATest(physics);
  
  console.log(johnWatson.courseOfferings);