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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.141 9.794-7.127-7.202C12.848-.536 9.633-.169 7.992.33a1.998 1.998 0 0 0-1.371 1.447 1.981 1.981 0 0 0 .539 1.896l4.481 4.506L.863 18.892a3.005 3.005 0 0 0 .026 4.241c.565.56 1.313.867 2.108.867h.018a2.97 2.97 0 0 0 2.11-.886l10.747-10.681 2.285 2.298a2.976 2.976 0 0 0 2.129.887h.005a2.97 2.97 0 0 0 2.129-.892l.713-.721a3.016 3.016 0 0 0 .008-4.211ZM8.575 2.243a5.587 5.587 0 0 1 1.634-.248c1.29 0 2.829.468 4.391 2.011l4.964 5.017-2.128 2.147-8.862-8.911v-.016ZM3.709 21.702a.995.995 0 0 1-.704.298c-.277-.016-.519-.101-.709-.29a.999.999 0 0 1-.016-1.407L13.052 9.597l1.41 1.418L3.709 21.702Zm18.002-9.103-.714.722a.988.988 0 0 1-.709.297h-.002a.987.987 0 0 1-.71-.296l-.73-.734 2.125-2.143.744.752a1.005 1.005 0 0 1-.004 1.402Z"/></svg>
  