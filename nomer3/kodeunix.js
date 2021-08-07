var kodeUnix = [23, 89,67,29,192,6,2,129,21,872,891,901,70,61,78,62,32,90,90];
kode1 = kodeUnix.map(kodeUnix => kodeUnix-50)
kode2 = (kodeUnix => kodeUnix >= 20 )
console.log(kode1, kode2)