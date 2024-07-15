console.log('Hello Parcel!!');

// async await을 쓰면 함수로 묶고 Promise로 비동기 처리
async function test(){
  const promise = Promise.resolve(1234);
  console.log(await promise);
}
test()