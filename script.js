(function(){
  const $term=document.getElementById('term');
  const $form=document.getElementById('cmdForm');
  const $input=document.getElementById('cmd');
  const params=new URLSearchParams(location.search);
  const NOME=params.get('nome')||'você';
  const PERGUNTA=params.get('pergunta')||'Aceita namorar comigo?';
  let stage=0;

  function line(txt,cls=''){const d=document.createElement('div');d.className='line '+cls;d.innerHTML=txt;$term.appendChild(d);$term.scrollTop=$term.scrollHeight;return d;}
  async function type(txt){line(txt);}

  const commands={
    help(){type('Comandos: help, start, decode, caesar, anagrama, aceitar, recusar, clear');},
    clear(){$term.innerHTML='';},
    start(){stage=1;type('Boot iniciado... Localizando '+NOME);type('Decode esta msg: bWUuLiBzZW0gY29tcGxldGEgc2VtIFZvY2U/');},
    decode(x){if(atob(x)=='me... sem completa sem Voce?'){stage=2;type('Boa! Agora caesar 3 Khu Txhcih?');}},
    caesar(s,...t){if(t.join(' ')=='Khu Txhcih?'){stage=3;type('Boa! Agora anagrama R-A-O-C-Ç-A-O aceitar');}},
    anagrama(...g){if(g.includes('aceitar')){stage=4;type('<span class=question>'+PERGUNTA+'</span> <button onclick="alert(\'Sim!\')">Sim ❤</button>');}},
    aceitar(){if(stage>=4)type('Resposta: SIM! 🎉');},
    recusar(){type('Resposta: NÃO 😢');}
  };

  $form.onsubmit=e=>{e.preventDefault();const v=$input.value.split(' ');$input.value='';const c=v.shift();if(commands[c])commands[c](...v);else type('Comando inválido');};
  setTimeout(()=>{line('Bem-vinda(o), '+NOME);line('Digite help ou start');},500);
})();