<template>
  <div></div>
</template>
<script>
export default {
  methods: {
    reset() {
        const light = (timer,cb)=>{
            return new Promise((resolve,reject)=>{
                setTimeout(() => {
                    cb();
                    resolve()
                }, timer);
            })
        }
        const step = ()=>{
            Promise.then(()=>{
                light(3000,()=>{
                    console.log('red');
                })
            }).then(()=>{
                light(2000,()=>{
                    console.log('green');
                })
            }).then(()=>{
                light(1000,()=>{
                    console.log('yellow');
                })
            }).
        }
    },
  },
};
</script>
