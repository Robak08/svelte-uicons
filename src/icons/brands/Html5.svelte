<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M5.081 0h1.078v1.069h.994V0h1.078v3.234H7.153V2.156h-.984v1.078H5.081V0zm4.575 1.078h-.951V0h2.986v1.078h-.956v2.156H9.656V1.078zM12.164 0h1.13l.694 1.139L14.681 0h1.13v3.234h-1.078V1.631l-.755 1.162-.755-1.162v1.603h-1.059V0zm4.181 0h1.078v2.166h1.528v1.069h-2.606V0zM3.497 4.716l1.547 17.362L11.986 24l6.97-1.931 1.547-17.353H3.497zm3.159 3.548h5.334v2.128h-3l.197 2.18h2.803v2.123H7.237l-.581-6.431zM12 14.7h2.616l-.248 2.766-2.368.635V14.7zm5.625 6.253L12 22.523v-2.198l-4.369-1.219-.3-3.342h2.138l.15 1.702 2.377.636-.005.001v2.212l.009-.002 4.35-1.207.586-6.534H12v-2.18h5.128l.197-2.128H12V6.141h6.952l-1.327 14.812z"/><path d="M12 12.572 16.936 12.572 16.35 19.106 12 20.313 12 18.101 14.367 17.466 14.616 14.7 12 14.7z"/><path d="M17.325 8.264 17.128 10.392 12 10.392 12 8.264z"/><path d="M11.991 8.264v2.128H12V8.264h-.009zm0 4.308v2.123H12v-2.123h-.009zm.004 5.53-.005.001v2.212l.01-.002v-2.21l-.005-.001z"/><path d="M11.991 8.264v2.128h5.137l.197-2.128h-5.334zm0 4.308V14.7h2.625l-.248 2.766-2.368.635-.005.001-.005.001v2.212l.01-.002 4.35-1.207.586-6.534h-4.945z"/></svg>
  