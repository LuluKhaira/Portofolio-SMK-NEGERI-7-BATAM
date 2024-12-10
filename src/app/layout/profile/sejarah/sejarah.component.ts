// school-history.component.ts
import { Component } from '@angular/core';

interface Expertise {
  title: string;
  description: string;
  careerOpportunities: string[];
}

@Component({
  selector: 'app-school-history',
  templateUrl: './sejarah.component.html',
  styleUrls: ['./sejarah.component.scss']
})
export class SchoolHistoryComponent {
  schoolData = {
    name: 'SMK Negeri 7 Batam',
    type: 'Kejuruan Teknologi',
    foundedIn: 'Juli 2013',
    nss: '401316012001',
    npsn: '69774885',
    principalName: 'NURSYA\'BANI, M.Pd',
    address: 'Perum Sekawan Pemko Batam',
    village: 'Belian',
    district: 'Batam Kota',
    website: 'smknegeri7batam.sch.id'
  };

  expertiseAreas: Expertise[] = [
    {
      title: 'Design Komunikasi Visual (DKV)',
      description: 'Fokus pada pengembangan kemampuan dalam mendesain visual untuk komunikasi, seperti desain grafis, desain web, animasi, dan branding.',
      careerOpportunities: [
        'Industri kreatif',
        'Periklanan',
        'Desain grafis',
        'Media digital'
      ]
    },
    {
      title: 'Rekayasa Perangkat Lunak (RPL)',
      description: 'Mengajarkan siswa tentang pengembangan perangkat lunak, termasuk pemrograman, pengujian perangkat lunak, dan manajemen basis data.',
      careerOpportunities: [
        'Pengembang perangkat lunak',
        'Analis sistem',
        'Administrator basis data'
      ]
    },
    {
      title: 'Teknik Komputer dan Jaringan (TKJ)',
      description: 'Fokus pada pemasangan, konfigurasi, dan pemeliharaan jaringan komputer serta perangkat keras terkait.',
      careerOpportunities: [
        'Teknisi jaringan',
        'Administrator sistem',
        'Spesialis keamanan jaringan'
      ]
    },
    {
      title: 'Teknik Jaringan Akses Telekomunikasi (TJAT)',
      description: 'Mempelajari teknologi dan perangkat dalam jaringan akses telekomunikasi, termasuk pemasangan, pengujian, dan pemeliharaan infrastruktur jaringan.',
      careerOpportunities: [
        'Teknisi telekomunikasi',
        'Teknisi lapangan',
        'Pengelola infrastruktur jaringan'
      ]
    },
    {
      title: 'Teknik Instalasi Tenaga Listrik (TITL)',
      description: 'Mengajarkan tentang instalasi, pemeliharaan, dan perbaikan sistem tenaga listrik, termasuk pengetahuan tentang kabel, alat ukur listrik, dan sistem distribusi.',
      careerOpportunities: [
        'Teknisi pembangkit listrik',
        'Teknisi distribusi listrik',
        'Teknisi instalasi listrik di proyek konstruksi'
      ]
    }
  ];

  schoolHistory = `Awal berdirinya SMK Negeri 7 Batam adalah untuk memenuhi tuntutan pasar kerja pada saat itu tahun 2013. 
  Sekolah ini berdiri di lokasi Perum Sekawan Pemko Batam Kelurahan Belian Kecamatan Batam Kota. 
  Awalnya membuka konsentrasi Administrasi Perkantoran dan Perbankan serta Keuangan Mikro berdasarkan akte pendirian 
  nomor KPTS. 367/HK/IX/2014. Pada tahun 2015, sekolah menambah konsentrasi Teknik Jaringan Akses Telekomunikasi.`;
}