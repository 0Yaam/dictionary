
import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const Search = ({ word, setWord, searchHandler }) => {
  const onKeyPress = (e) => {
    if (e.keyCode == 13) {
      searchHandler();
    } else {
      return;
    }
  };
  return (
    <div className="max-w-3xl mx-auto my-2 ">
      <div className="flex relative">
        <input
          placeholder="Search your word..."
          value={word}
          onKeyDown={(e) => onKeyPress(e)}
          onChange={(e) => setWord(e.target.value)}
          className="border bg-gray-100 text-black focus:outline-none  rounded-lg p-4 h-10 w-[100%]"
        />
        <BiSearchAlt2
          onClick={searchHandler}
          className="absolute  right-2 cursor-pointer text-2xl text-violet-500 top-[20%]"
        />
      </div>
    </div>
  );
};

export default Search;


// //Cây nhị phân
// import React, { useState } from "react";
// import { BiSearchAlt2 } from "react-icons/bi";

// //cấu tạo node, oop
// const data = [
//   {
//     "word": "a-power",
//     "ipa": "/'ei'pauə/",
//     "definition": "*  danh từ\n- năng lượng nguyên tử\n- cường quốc nguyên tử"
//   },
//   {
//     "word": "a.d.",
//     "ipa": "/'ei'di:/",
//     "definition": "*  (viết tắt) của Ano Domin\n- sau công nguyên\n=1540 a.d.+ năm 1540 sau công nguyên"
//   },
//   {
//     "word": "a.m.",
//     "ipa": "/'ei'em/",
//     "definition": "*  phó từ\n- (xem) ante_meridiem"
//   },
//   {
//     "word": "aard-wolf",
//     "ipa": "/'ɑ:d,wulf/",
//     "definition": "*  danh từ\n- (động vật học) chó sói đất (Nam Phi)"
//   },
//   {
//     "word": "aasvogel",
//     "ipa": "/'ɑ:sfougəl/",
//     "definition": "*  danh từ\n- (động vật học) con kên kên (Nam Phi)"
//   },
//   {
//     "word": "aba",
//     "ipa": "/'ɑ:bə/",
//     "definition": "*  danh từ\n- áo aba (áo ngoài giống hình cái túi người A-Rập)"
//   },
//   {
//     "word": "abaci",
//     "ipa": "/'æbəkəs/",
//     "definition": "*  danh từ,  số nhiều abaci,  abacuses\n- bàn tính\n=to move counters of an abacus; to work an abacus+ tính bằng bàn tính, gảy bàn tính\n- (kiến trúc)\n- đầu cột, đỉnh cột"
//   },
//   {
//     "word": "aback",
//     "ipa": "/ə'bæk/",
//     "definition": "*  phó từ\n- lùi lại, trở lại phía sau\n=to stand aback from+ đứng lùi lại để tránh\n- (hàng hải) bị thổi ép vào cột buồm (buồm)\n=to be taken aback+ (hàng hải) bị gió thổi ép vào cột buồm\n- (nghĩa bóng) sửng sốt, ngạc nhiên\n=to be taken aback by the news+ sửng sốt vì cái tin đó"
//   },
//   {
//     "word": "abacus",
//     "ipa": "/'æbəkəs/",
//     "definition": "*  danh từ,  số nhiều abaci,  abacuses\n- bàn tính\n=to move counters of an abacus; to work an abacus+ tính bằng bàn tính, gảy bàn tính\n- (kiến trúc)\n- đầu cột, đỉnh cột"
//   },
//   {
//     "word": "abaddon",
//     "ipa": "/ə'bædən/",
//     "definition": "*  danh từ\n- âm ti, địa ngục\n- con quỷ"
//   },
//   {
//     "word": "abaft",
//     "ipa": "/ə'bɑ:ft/",
//     "definition": "*  phó từ\n- (hàng hải) ở phía sau bánh lái, gần phía bánh lái\n*  giới từ\n- (hàng hải) sau, ở đằng sau, ở phía sau\n=abaft the mast+ sau cột buồm"
//   },
//   {
//     "word": "abalone",
//     "ipa": "/,æbə'louni/",
//     "definition": "*  danh từ\n- (từ Mỹ,nghĩa Mỹ) bào ngư"
//   },
//   {
//     "word": "abandon",
//     "ipa": "/ə'bændən/",
//     "definition": "*  ngoại động từ\n- bộm (nhiếp ảnh) (nhiếp ảnh) (từ Mỹ,nghĩa Mỹ) từ bỏ; bỏ rơi, ruồng bỏ\n=to abandon a hope+ từ bỏ hy vọng\n=to abandon one's wife and children+ ruồng bỏ vợ con\n=to abandon oneself to+ đắm đuối, chìm đắm vào (nỗi thất vọng...)\n*  danh từ\n- sự phóng túng, sự tự do, sự buông thả\n=with abandon+ phóng túng"
//   },
//   {
//     "word": "abandoned",
//     "ipa": "/ə'bændənd/",
//     "definition": "*  tính từ\n- bị bỏ rơi, bị ruồng bỏ\n- phóng đãng, truỵ lạc"
//   },
//   {
//     "word": "abandoner",
//     "ipa": "/ə'bændənə/",
//     "definition": "*  danh từ\n- (pháp lý) người rút đơn"
//   },
//   {
//     "word": "abandonment",
//     "ipa": "/ə'bændənmənt/",
//     "definition": "*  danh từ\n- sự bỏ, sự từ bỏ, sự bỏ rơi, sự ruồng bỏ\n- tình trạng bị bỏ rơi, tình trạng bị ruồng bỏ\n- sự phóng túng, sự tự do, sự buông thả"
//   },
//   {
//     "word": "abase",
//     "ipa": "/ə'beis/",
//     "definition": "*  ngoại động từ\n- làm hạ phẩm giá, làm mất thể diện, làm nhục\n=to abase one-self+ tự hạ mình"
//   },
//   {
//     "word": "abasement",
//     "ipa": "/ə'beismənt/",
//     "definition": "*  danh từ\n- sự làm hạ phẩm giá, sự làm mất thể diện, sự làm nhục"
//   },
//   {
//     "word": "abash",
//     "ipa": "/ə'bæʃ/",
//     "definition": "*  ngoại động từ\n- làm bối rối, làm lúng túng, làm luống cuống"
//   },
//   {
//     "word": "abashment",
//     "ipa": "/ə'bæʃmənt/",
//     "definition": "*  danh từ\n- sự bối rối, sự lúng túng, sự luống cuống"
//   },
//   {
//     "word": "abask",
//     "ipa": "/ə'bɑ:sk/",
//     "definition": "*  phó từ\n- (thơ ca) dưới ánh nắng, dưới ánh mặt trời, trong ánh lửa ấm"
//   },
//   {
//     "word": "abatable",
//     "ipa": "/ə'beitəbl/",
//     "definition": "*  tính từ\n- có thể làm dịu, có thể làm yếu đi, có thể giảm bớt\n- có thể hạ, có thể bớt\n- có thể làm nhụt\n- có thể chấm dứt, có thể thanh trừ\n- (pháp lý) có thể huỷ bỏ, có thể thủ tiêu"
//   },
//   {
//     "word": "abate",
//     "ipa": "/ə'beit/",
//     "definition": "*  ngoại động từ\n- làm dịu đi, làm yếu đi, làm giảm bớt\n=to abate a pain+ làm dịu đau\n- hạ (giá), bớt (giá)\n- làm nhụt (nhụt khí...)\n- làm cùn (lưỡi dao...)\n- thanh toán, làm mất hết (những điều khó chịu, bực bội)\n- (pháp lý) huỷ bỏ, thủ tiêu\n- (kỹ thuật) ram (thép)\n*  nội động từ\n- dịu đi, yếu đi, nhụt đi, đỡ, bớt, ngớt\n=paint abates+ cơn đau dịu đi\n=storm abates+ cơn bão ngớt"
//   },
//   {
//     "word": "abatement",
//     "ipa": "/ə'beitmənt/",
//     "definition": "*  danh từ\n- sự dịu đi, sự yếu đi, sự nhụt đi, sự giảm bớt, sự đỡ, sự ngớt\n- sự hạ (giá), sự bớt (giá)\n- sự chấm dứt, sự thanh toán\n- (pháp lý) sự huỷ bỏ, sự thủ tiêu\n=abatement of a contract+ sự huỷ bỏ một hợp đồng"
//   },
//   {
//     "word": "abatis",
//     "ipa": "/'æbətis/",
//     "definition": "*  danh từ,  số nhiều abatis\n- (quân sự) đống cây chướng ngại, đống cây cản"
//   },
//   {
//     "word": "abatised",
//     "ipa": "/'æbətist/",
//     "definition": "*  tính từ\n- (quân sự) có đống cây chướng ngại, có đống cây cản"
//   },
//   {
//     "word": "abattoir",
//     "ipa": "/'æbətwɑ:/",
//     "definition": "*  danh từ\n- lò mổ, lò sát sinh"
//   },
//   {
//     "word": "abb",
//     "ipa": "/æb/",
//     "definition": "*  danh từ\n- (nghành dệt) sợi canh, sợi khổ (của tấm vải)"
//   },
//   {
//     "word": "abbacy",
//     "ipa": "/'æbəsi/",
//     "definition": "*  danh từ\n- chức vị trưởng tu viện; quyền hạn trưởng tu viện"
//   },
//   {
//     "word": "abbatial",
//     "ipa": "/ə'beiʃəl/",
//     "definition": "*  tính từ\n- (thuộc) trưởng tu viện"
//   },
//   {
//     "word": "abbess",
//     "ipa": "/'æbis/",
//     "definition": "*  danh từ\n- bà trưởng tu viện"
//   },
//   {
//     "word": "abbey",
//     "ipa": "/'æbi/",
//     "definition": "*  danh từ\n- tu viện\n- giới tu sĩ, các nhà tu, các bà xơ nhà thờ (lớn)"
//   },
//   {
//     "word": "abbot",
//     "ipa": "/'æbət/",
//     "definition": "*  danh từ\n- cha trưởng tu viện"
//   },
//   {
//     "word": "abbreviate",
//     "ipa": "/ə'bri:vieit/",
//     "definition": "*  ngoại động từ\n- tóm tắt, viết tắt; rút ngắn lại (cuộc đi thăm...)\n- (toán học) ước lược, rút gọn\n*  tính từ\n- tương đối ngắn"
//   },
//   {
//     "word": "abbreviated",
//     "ipa": "/ə'bri:vietid/",
//     "definition": "*  tính từ\n- tóm tắt; viết tắt; rút ngắn lại\n- ngắn cũn cỡn (quần áo...)"
//   },
//   {
//     "word": "abbreviation",
//     "ipa": "/ə,bri:vi'eiʃn/",
//     "definition": "*  danh từ\n- sự tóm tắt, sự rút ngắn (cuộc đi thăm...)\n- bài tóm tắt\n- chữ viết tắt\n=Jan is the abbreviation January+ Jan là chữ viết tắt của January\n- (toán học) sự ước lược, sự rút gọn"
//   },
//   {
//     "word": "abbreviator",
//     "ipa": "/ə'bri:vieitə/",
//     "definition": "*  danh từ\n- người tóm tắt"
//   },
//   {
//     "word": "abdicant",
//     "ipa": "/'æbdikeitə/",
//     "definition": "*  danh từ\n- người từ bỏ\n- người thoái vị"
//   },
//   {
//     "word": "abdicate",
//     "ipa": "/'æbdikeit/",
//     "definition": "*  ngoại động từ\n- từ bỏ (quyền lợi, địa vị...)\n=to abdicate a position+ từ bỏ một địa vị\n=to abdicate all one's rights+ từ bỏ mọi quyền lợi\n*  nội động từ\n- thoái vị, từ ngôi"
//   },
//   {
//     "word": "abdication",
//     "ipa": "/,æbdi'keiʃn/",
//     "definition": "*  danh từ\n- sự thoái vị, sự từ ngôi\n- sự từ bỏ (địa vị, chức vụ, quyền lợi...)"
//   },
//   {
//     "word": "abdicator",
//     "ipa": "/'æbdikeitə/",
//     "definition": "*  danh từ\n- người từ bỏ\n- người thoái vị"
//   },
//   {
//     "word": "abdomen",
//     "ipa": "/'æbdəmen/",
//     "definition": "*  danh từ\n- bụng"
//   },
//   {
//     "word": "abdominal",
//     "ipa": "/æb'dɔminl/",
//     "definition": "*  tính từ\n- (thuộc) bụng; ở bụng\n=an abdominal operation+ phẫu thuật ở bụng\n=abdominal cavity+ khoang bụng"
//   },
//   {
//     "word": "abdominous",
//     "ipa": "/æb'dɔminəs/",
//     "definition": "*  tính từ\n- phệ bụng"
//   },
//   {
//     "word": "abducent",
//     "ipa": "/æb'dju:sənt/",
//     "definition": "*  tính từ\n- (giải phẫu) rẽ ra, giạng ra"
//   },
//   {
//     "word": "abduct",
//     "ipa": "/æd'dʌkt/",
//     "definition": "*  ngoại động từ\n- bắt cóc, cuỗm đi, lừa đem đi (người đàn bà...)\n- (giải phẫu) rẽ ra, giạng ra"
//   },
//   {
//     "word": "abduction",
//     "ipa": "/æb'dʌkʃn/",
//     "definition": "*  danh từ\n- sự bắt cóc (trẻ em...), sự bắt đi, sự cuỗm đi, sự lừa đem đi\n- (giải phẫu) sự giạng ra"
//   },
//   {
//     "word": "abductor",
//     "ipa": "/æb'dʌktə/",
//     "definition": "*  danh từ\n- người bắt cóc, người cuỗm đi, người lừa đem đi\n- (giải phẫu) cơ giạng ((cũng) abductor muscle)"
//   },
//   {
//     "word": "abeam",
//     "ipa": "/ə'bi:m/",
//     "definition": "*  phó từ\n- (hàng hải),  (hàng không) đâm ngang sườn\n=abeam of us+ ngang sườn chúng tôi; sóng ngang với chúng tôi"
//   },
//   {
//     "word": "abecedarian",
//     "ipa": "/,eibi:si:'deəriən/",
//     "definition": "*  tính từ\n- sắp xếp theo thứ tự abc\n- sơ đẳng\n- dốt nát\n*  danh từ\n- (từ Mỹ,nghĩa Mỹ) học sinh vỡ lòng"
//   },
//   {
//     "word": "abed",
//     "ipa": "/ə'bed/",
//     "definition": "*  phó từ\n- ở trên giường\n=to lie abed+ nằm ở trên giường"
//   },
//   {
//     "word": "abele",
//     "ipa": "/ə'bi:l/",
//     "definition": "*  danh từ\n- (thực vật học) cây bạch dương"
//   },
//   {
//     "word": "abelmosk",
//     "ipa": "/'eibəlmɔsk/",
//     "definition": "*  danh từ\n- (thực vật học) cây vông vàng"
//   },
//   {
//     "word": "aberrance",
//     "ipa": "/æ'berəns/",
//     "definition": "*  danh từ\n- sự lầm lạc\n- (sinh vật học) sự khác thường"
//   },
//   {
//     "word": "aberrancy",
//     "ipa": "/æ'berəns/",
//     "definition": "*  danh từ\n- sự lầm lạc\n- (sinh vật học) sự khác thường"
//   },
//   {
//     "word": "aberrant",
//     "ipa": "/æ'berənt/",
//     "definition": "*  tính từ\n- lầm lạc\n- (sinh vật học) khác thường"
//   },
//   {
//     "word": "aberration",
//     "ipa": "/æ'be'reiʃn/",
//     "definition": "*  danh từ\n- sự lầm lạc; phút lầm lạc\n- sự kém trí khôn, sự loạn trí\n- sự khác thường\n- (vật lý) quang sai\n=lateral aberration+ quang sai ngang\n- (thiên văn học) tính sai\n=secular aberration+ tính sai trường kỳ\n=annual aberration+ tính sai hằng năm"
//   },
//   {
//     "word": "abet",
//     "ipa": "/ə'bet/",
//     "definition": "*  ngoại động từ\n- xúi bẩy, xúi giục, khích\n- tiếp tay (ai làm bậy)"
//   },
//   {
//     "word": "abetment",
//     "ipa": "/ə'betmənt/",
//     "definition": "*  danh từ\n- sự xúi bẩy, sự xúi giục, sự khích\n- sự tiếp tay"
//   },
//   {
//     "word": "abettal",
//     "ipa": "/ə'betmənt/",
//     "definition": "*  danh từ\n- sự xúi bẩy, sự xúi giục, sự khích\n- sự tiếp tay"
//   },
//   {
//     "word": "abette",
//     "ipa": "/ə'betə/",
//     "definition": "*  danh từ\n- kẻ xúi giục\n- kẻ tiếp tay"
//   },
//   {
//     "word": "abettor",
//     "ipa": "/ə'betə/",
//     "definition": "*  danh từ\n- kẻ xúi giục\n- kẻ tiếp tay"
//   },
//   {
//     "word": "abeyance",
//     "ipa": "/ə'beiəns/",
//     "definition": "*  danh từ\n- sự đọng lại\n=work in abeyance+ công việc còn đọng lại\n- sự đình chỉ, sự hoãn lại, sự tạm thời không áp dụng (đạo luật...)\n=to be in abeyance; to fall into abeyance+ bị đình chỉ, bị hoãn lại, tạm thời không được áp dụng\n- (pháp lý) tình trạng tạm thời không có người nhận; tình trạng tạm thời vô chủ\n=lands in abeyance+ đất vô thừa nhận, đất vô chủ\n- tình trạng trống, tình trạng khuyết (một chức vị)"
//   },
//   {
//     "word": "abeyant",
//     "ipa": "/ə'beiənt/",
//     "definition": "*  tính từ\n- tạm thời đình chỉ, tạm nghỉ hoạt động"
//   },
//   {
//     "word": "abhor",
//     "ipa": "/əb'hɔ:/",
//     "definition": "*  ngoại động từ\n- ghê tởm; ghét cay ghét đắng"
//   },
//   {
//     "word": "abhorrence",
//     "ipa": "/əb'hɔrəns/",
//     "definition": "*  danh từ\n- sự ghê tởm\n=to have an abhorrence of+ sự ghét cay ghét đắng\n=to hold in abhorrence of+ ghê tởm; ghét cay ghét đắng\n- điều ghê tởm; cái bị ghét cay ghét đắng"
//   },
//   {
//     "word": "abhorrent",
//     "ipa": "/əb'hɔrənt/",
//     "definition": "*  tính từ\n- ghê tởm, đáng ghét\n=to be abhorrent to someone+ ghê tởm đối với ai, bị ai ghê tởm, bị ai ghét cay ghét đắng\n- (+ from) trái với, mâu thuẫn với, không hợp với\n=conduct abhorrent from principles+ tư cách mâu thuẫn với phép tắc\n- (từ cổ,nghĩa cổ) (+ of) ghê tởm, ghét cay ghét đắng\n=to be abhorrent of something+ ghê tởm cái gì, ghét cay ghét đắng cái gì"
//   },
//   {
//     "word": "abidance",
//     "ipa": "/ə'baidəns/",
//     "definition": "*  danh từ\n- sự tôn trọng, sự tuân theo, sự thi hành đúng\n=abidance by rules+ sự tôn trọng luật lệ, sự tuân theo luật lệ\n- (+ in) sự tồn tại; sự kéo dài"
//   },
//   {
//     "word": "abide",
//     "ipa": "/ə'baid/",
//     "definition": "*  nội động từ (abode; abode,  abide)\n- tồn tại; kéo dài\n=this mistake will not abide for ever+ sai lầm này sẽ không thể kéo dài mãi được\n- (+ by) tôn trọng, giữ, tuân theo, chịu theo; trung thành với\n=to abide by one's friend+ trung thành với bạn\n- (từ cổ,nghĩa cổ) ở, ngụ tại\n=to abide with somebody+ ở với ai\n*  ngoại động từ\n- chờ, chờ đợi\n=to abide one's time+ chờ thời cơ\n- chịu đựng, chịu\n=we can't abide his fits of temper+ chúng tôi không thể chịu được những cơn nóng giận của hắn\n- chống đỡ được (cuộc tấn công)"
//   },
//   {
//     "word": "abiding",
//     "ipa": "/ə'baidiɳ/",
//     "definition": "*  tính từ\n- (văn học) không thay đổi, vĩnh cửu, tồn tại mãi mãi"
//   },
//   {
//     "word": "abietene",
//     "ipa": "/'æbiəti:n/",
//     "definition": "*  danh từ\n- (hoá học) Abietin"
//   },
//   {
//     "word": "abigail",
//     "ipa": "/'æbigeil/",
//     "definition": "*  danh từ\n- thị tỳ, nữ tỳ"
//   },
//   {
//     "word": "abilitate",
//     "ipa": "/ə'biliteit/",
//     "definition": "*  động từ\n- (từ hiếm,nghĩa hiếm) (như) habiliate"
//   },
//   {
//     "word": "ability",
//     "ipa": "/ə'biliti/",
//     "definition": "*  danh từ\n- năng lực, khả năng (làm việc gì)\n- (số nhiều) tài năng, tài cán\n=a man of abilities+ một người tài năng\n*  (pháp lý)\n- thẩm quyền\n- (thương nghiệp) khả năng thanh toán được; vốn sẵn có, nguồn vốn (để đáp ứng khi cần thiết)\n=to be best of one's ability+ với tư cách khả năng của mình"
//   },
//   {
//     "word": "abiogenesis",
//     "ipa": "/,eibaiou'dʤenisis/",
//     "definition": "*  danh từ\n- (sinh vật học) sự phát sinh tự nhiên"
//   },
//   {
//     "word": "abiogenetic",
//     "ipa": "/,eibaioudʤi'netik/",
//     "definition": "*  tính từ\n- (sinh vật học) phát sinh tự nhiên"
//   },
//   {
//     "word": "abiogenetically",
//     "ipa": "/,eibaioudʤi'netikəli/",
//     "definition": "*  phó từ\n- (sinh vật học) phát sinh tự nhiên"
//   },
//   {
//     "word": "abiogenist",
//     "ipa": "/,eibai'ɔdʤinist/",
//     "definition": "*  danh từ\n- người tin thuyết phát sinh tự nhiên"
//   },
//   {
//     "word": "abiogenous",
//     "ipa": "/,eibai'ɔdʤiəns/",
//     "definition": "*  tính từ\n- (sinh vật học) phát sinh tự nhiên"
//   },
//   {
//     "word": "abiogeny",
//     "ipa": "/,eibaiou'dʤenisis/",
//     "definition": "*  danh từ\n- (sinh vật học) sự phát sinh tự nhiên"
//   },
//   {
//     "word": "abiological",
//     "ipa": "/,æbaiə'lɔdʤikəl/",
//     "definition": "*  tính từ\n- phi sinh vật học"
//   },
//   {
//     "word": "abiotic",
//     "ipa": "/,æbai'ɔtik/",
//     "definition": "*  tính từ\n- vô sinh"
//   },
//   {
//     "word": "abject",
//     "ipa": "/'æbdʤekt/",
//     "definition": "*  tính từ\n- hèn hạ, thấp hèn, đê tiện, đáng khinh\n- khốn khổ, khốn nạn\n=in abject poverty+ nghèo rớt mồng tơi, nghèo xác nghèo xơ"
//   },
//   {
//     "word": "abjection",
//     "ipa": "/æb'dʤekʃn/",
//     "definition": "*  danh từ\n- sự hèn hạ, sự thấp hèn, sự đê tiện"
//   },
//   {
//     "word": "abjectness",
//     "ipa": "/'æbdʤektnis/",
//     "definition": "*  danh từ\n- sự hèn hạ, sự thấp hèn, sự đê tiện, sự đáng khinh\n- sự khốn khổ, sự khốn nạn"
//   },
//   {
//     "word": "abjuration",
//     "ipa": "/,æbdʤuə'reiʃn/",
//     "definition": "*  danh từ\n- sự tuyên bố bỏ, sự thề bỏ\n- (tôn giáo) sự thề bỏ đạo, sự bội đạo"
//   },
//   {
//     "word": "abjure",
//     "ipa": "/əb'dʤuə/",
//     "definition": "*  động từ\n- tuyên bố bỏ, nguyện bỏ\n=to abjure one's religion+ bỏ đạo\n=to abjure one's rights+ tuyên bố từ bỏ quyền lợi của mình\n- rút lui (ý kiến, lời hứa...)\n=to abjure one's opinion+ rút lui ý kiến\n- thề bỏ (đất nước) đi mãi mãi"
//   },
//   {
//     "word": "ablactation",
//     "ipa": "/,æblæk'teiʃn/",
//     "definition": "*  danh từ\n- sự cai sữa\n- sự cạn sữa"
//   },
//   {
//     "word": "ablate",
//     "ipa": "/æb'leit/",
//     "definition": "*  ngoại động từ\n- (y học) cắt bỏ"
//   },
//   {
//     "word": "ablation",
//     "ipa": "/æb'leʃn/",
//     "definition": "*  danh từ\n- (y học) sự cắt bỏ (một bộ phận trong cơ thể)\n- (địa lý,địa chất) sự tải mòn (đá)\n- (địa lý,địa chất) sự tiêu mòn (sông băng)"
//   },
//   {
//     "word": "ablative",
//     "ipa": "/'æblətiv/",
//     "definition": "*  tính từ\n- (ngôn ngữ học) (thuộc) cách công cụ\n*  danh từ\n- (ngôn ngữ học) cách công cụ"
//   },
//   {
//     "word": "ablaut",
//     "ipa": "/'æblaut/",
//     "definition": "*  danh từ\n- (ngôn ngữ học) Aplau"
//   },
//   {
//     "word": "ablaze",
//     "ipa": "/ə'bleiz/",
//     "definition": "*  tính từ & phó từ\n- rực cháy, bốc cháy\n- sáng chói lọi\n- bừng bừng, rừng rực\n=ablaze with anger+ bừng bừng nổi giận"
//   },
//   {
//     "word": "able",
//     "ipa": "/'eibl/",
//     "definition": "*  tính từ\n- có năng lực, có tài\n=an able co-op manager+ một chủ nhiệm hợp tác xã có năng lực\n=an able writer+ một nhà văn có tài\n=to be able to+ có thể\n=to be able to do something+ có thể làm được việc gì\n- (pháp lý) có đủ tư cách, có đủ thẩm quyền"
//   },
//   {
//     "word": "able-bodied",
//     "ipa": "/'eibl'bɔdid/",
//     "definition": "*  tính từ\n- khoẻ mạnh; đủ tiêu chuẩn sức khoẻ (làm nghĩa vụ quân sự)\n=able-bodied seaman+ ((viết tắt) A.B.) thuỷ thủ hạng nhất"
//   },
//   {
//     "word": "ablen",
//     "ipa": "/'æblin/",
//     "definition": "*  danh từ\n- (động vật học) cá aplet, cá vảy bạc (họ cá chép)"
//   },
//   {
//     "word": "ablet",
//     "ipa": "/'æblin/",
//     "definition": "*  danh từ\n- (động vật học) cá aplet, cá vảy bạc (họ cá chép)"
//   },
//   {
//     "word": "ablings",
//     "ipa": "/'eibliɳz/",
//     "definition": "*  phó từ\n- (Ê-cốt) có lẽ, có thể"
//   },
//   {
//     "word": "ablins",
//     "ipa": "/'eibliɳz/",
//     "definition": "*  phó từ\n- (Ê-cốt) có lẽ, có thể"
//   },
//   {
//     "word": "abloom",
//     "ipa": "/ə'blu:m/",
//     "definition": "*  tính từ & phó từ\n- đang nở (ra) hoa"
//   },
//   {
//     "word": "abluent",
//     "ipa": "/'æbluənt/",
//     "definition": "*  tính từ\n- rửa sạch, tẩy sạch\n*  danh từ\n- chất tẩy, thuốc tẩy"
//   },
//   {
//     "word": "ablush",
//     "ipa": "/ə'blʌʃ/",
//     "definition": "*  tính từ & phó từ\n- thẹn đỏ mặt"
//   },
//   {
//     "word": "ablution",
//     "ipa": "/ə'blu:ʃn/",
//     "definition": "*  danh từ,  (thường) số nhiều\n- (tôn giáo) lễ rửa tội; lễ tắm gội; lễ rửa sạch các đồ thờ\n- (tôn giáo) nước tắm gội; nước rửa đồ thờ\n- ((thường) số nhiều) sự tắm gội, sự rửa ráy"
//   },
//   {
//     "word": "ably",
//     "ipa": "/'eibli/",
//     "definition": "*  phó từ\n- có khả năng, có tài, khéo léo, tài tình"
//   },
//   {
//     "word": "abnegate",
//     "ipa": "/'æbnigeit/",
//     "definition": "*  ngoại động từ\n- nhịn (cái gì)\n- bỏ (đạo)\n- từ bỏ (quyền lợi...); từ chối không nhận (đặc quyền...)"
//   },
//   {
//     "word": "abnegation",
//     "ipa": "/,æbni'geiʃn/",
//     "definition": "*  danh từ\n- sự bỏ (đạo...); sự từ bỏ (quyền lợi); sự từ chối không nhận (đặc quyền...)\n- sự quên mình, sự hy sinh, sự xả thân ((thường) self abnegation)"
//   },
//   {
//     "word": "abnormal",
//     "ipa": "/æb'nɔ:məl/",
//     "definition": "*  tính từ\n- không bình thường, khác thường; dị thường"
//   },
//   {
//     "word": "abnormalcy",
//     "ipa": "/æb'nɔ:məlsi/",
//     "definition": "*  danh từ\n- sự không bình thường, sự khác thường; sự dị thường\n- vật kỳ quái, quái vật"
//   },
//   {
//     "word": "abnormality",
//     "ipa": "/æb'nɔ:məlsi/",
//     "definition": "*  danh từ\n- sự không bình thường, sự khác thường; sự dị thường\n- vật kỳ quái, quái vật"
//   },
//   {
//     "word": "abnormity",
//     "ipa": "/æb'nɔ:məlsi/",
//     "definition": "*  danh từ\n- sự không bình thường, sự khác thường; sự dị thường\n- vật kỳ quái, quái vật"
//   },
//   {
//     "word": "aboard",
//     "ipa": "/ə'bɔ:d/",
//     "definition": "*  phó từ\n- trên tàu, trên boong tàu, trên thuyền, trên xe lửa; trên máy bay\n=to go aboard+ lên tàu, lên boong\n- dọc theo; gần, kế\n=close (hard) aboard+ nằm kế sát\n=to keep the land aboard+ đi dọc theo bờ\n=all aboard!+ đề nghị mọi người lên tàu!\n=to fall aboard of a ship+ va phải một chiếc tàu khác\n*  giới từ\n- lên trên (tàu thuỷ, xe lửa, máy bay...)\n=to go aboard a ship+ lên tàu\n=to travel aboard a special train+ đi du lịch trên một chuyến xe lửa đặc biệt"
//   },
//   {
//     "word": "abode",
//     "ipa": "/ə'boud/",
//     "definition": "*  danh từ\n- nơi ở\n=to take up (make) one's abode+ ở\n=of no fixed abode+ không có chỗ ở nhất định\n- sự ở lại, sự lưu lại\n*  thời quá khứ & động tính từ quá khứ của abide"
//   },
//   {
//     "word": "aboil",
//     "ipa": "/ə'bɔil/",
//     "definition": "*  tính từ & phó từ\n- đang sôi"
//   },
//   {
//     "word": "abolish",
//     "ipa": "/ə'bɔliʃ/",
//     "definition": "*  ngoại động từ\n- thủ tiêu, bãi bỏ, huỷ bỏ\n=to abolish the exploitation of man by man+ thủ tiêu chế độ người bóc lột người\n=to abolish acontract+ huỷ bỏ một bản giao kèo"
//   },
//   {
//     "word": "abolishable",
//     "ipa": "/ə'bɔliʃəbl/",
//     "definition": "*  tính từ\n- có thể thủ tiêu, có thể bãi bỏ, có thể huỷ bỏ"
//   },
//   {
//     "word": "abolisher",
//     "ipa": "/ə'bɔliʃə/",
//     "definition": "*  danh từ\n- người thủ tiêu, người bãi bỏ, người huỷ bỏ"
//   },
//   {
//     "word": "abolishment",
//     "ipa": "/ə'bɔliʃmənt/",
//     "definition": "*  danh từ\n- sự thủ tiêu, sự bãi bỏ, sự huỷ bỏ"
//   },
//   {
//     "word": "abolition",
//     "ipa": "/,æbə'liʃn/",
//     "definition": "*  danh từ\n- sự thủ tiêu, sự bãi bỏ, sự huỷ bỏ\n=abolition of taxes+ sự bãi bỏ thuế\n=abolition of slavery+ sự thủ tiêu chế độ nô lệ"
//   },
//   {
//     "word": "abolitionise",
//     "ipa": "/,æbə'liʃənaiz/",
//     "definition": "*  ngoại động từ\n- (từ Mỹ,nghĩa Mỹ) làm cho theo chủ nghĩa bãi nô"
//   },
//   {
//     "word": "abolitionism",
//     "ipa": "/,æbə'liʃənizm/",
//     "definition": "*  danh từ\n- (sử học) chủ nghĩa bãi nô"
//   },
//   {
//     "word": "abolitionist",
//     "ipa": "/,æbə'liʃənist/",
//     "definition": "*  danh từ\n- người theo chủ nghĩa bãi nô"
//   },
//   {
//     "word": "abolitionize",
//     "ipa": "/,æbə'liʃənaiz/",
//     "definition": "*  ngoại động từ\n- (từ Mỹ,nghĩa Mỹ) làm cho theo chủ nghĩa bãi nô"
//   },
//   {
//     "word": "abominable",
//     "ipa": "/ə'bɔminəbl/",
//     "definition": "*  tính từ\n- ghê tởm, kinh tởm\n=an abominable crime tội ác ghê tởm+ (thông tục) tồi, tồi tệ, rất xấu\n=abominable weather+ thời tiết rất xấu\n=an abominable meal+ bữa cơm tồi"
//   },
//   {
//     "word": "abominableness",
//     "ipa": "/ə'bɔminəblnis/",
//     "definition": "*  danh từ\n- sự ghê tởm, sự kinh tởm\n- (thông tục) sự tồi tệ"
//   },
//   {
//     "word": "abominate",
//     "ipa": "/ə'bɔmineit/",
//     "definition": "*  ngoại động từ\n- ghê tởm; ghét cay ghét đắng\n- (thông tục) không ưa, ghét mặt\n*  tính từ\n- (thơ ca) ghê tởm, kinh tởm"
//   },
//   {
//     "word": "abomination",
//     "ipa": "/ə,bɔmi'neiʃn/",
//     "definition": "*  danh từ\n- sự ghê tởm, sự kinh tởm; sự ghét cay ghét đắng\n=to hold something in abomination+ ghê tởm cái gì\n- vật kinh tởm; việc ghê tởm; hành động đáng ghét"
//   },
//   {
//     "word": "aboriginal",
//     "ipa": "/,æbə'ridʤənl/",
//     "definition": "*  tính từ\n- (thuộc) thổ dân; (thuộc) thổ sản, (thuộc) đặc sản\n=the aboriginal inhabitants of a country+ thổ dân của một nước\n=tea is an aboriginal product of Phutho+ chè là một đặc sản của Phú thọ\n- ban sơ, nguyên thuỷ, cổ sơ\n*  danh từ\n- thổ dân\n- (từ hiếm,nghĩa hiếm) thổ sản"
//   },
//   {
//     "word": "aborigines",
//     "ipa": "/,æbə'ridʤini:z/",
//     "definition": "*  danh từ số nhiều\n- thổ dân\n=Indians are the aborigines of America+ người da đỏ là thổ dân của châu Mỹ\n- thổ sản"
//   },
//   {
//     "word": "abort",
//     "ipa": "/ə'bɔ:t/",
//     "definition": "*  nội động từ\n- sẩy thai; đẻ non ((nghĩa đen) & (nghĩa bóng))\n- (sinh vật học) không phát triển, thui\n*  ngoại động từ\n- làm sẩy thai, phá thai"
//   },
//   {
//     "word": "aborted",
//     "ipa": "/ə'bɔ:tid/",
//     "definition": "*  tính từ\n- bị sẩy (thai)\n- (sinh vật học) không phát triển, thui"
//   },
//   {
//     "word": "aborticide",
//     "ipa": "/ə'bɔ:tisaid/",
//     "definition": "*  danh từ\n- thuốc giết thai"
//   },
//   {
//     "word": "abortifacient",
//     "ipa": "/ə'bɔ:ti'feiʃənt/",
//     "definition": "*  tính từ\n- phá thai, làm sẩy thai\n*  danh từ\n- thuốc phá thai"
//   },
//   {
//     "word": "abortion",
//     "ipa": "/ə'bɔ:ʃn/",
//     "definition": "*  danh từ\n- sự sẩy thai, sự phá thai; sự nạo thai\n- người lùn tịt; đứa bé đẻ non, vật đẻ non; vật dị dạng, quái thai\n- sự chết non chết yểu, sự sớm thất bại (của một kế hoạch, ý đồ...)\n- (sinh vật học) tình trạng phát triển không đầy đủ"
//   },
//   {
//     "word": "abortionist",
//     "ipa": "/ə'bɔ:ʃənist/",
//     "definition": "*  danh từ\n- người phá thai"
//   },
//   {
//     "word": "abortive",
//     "ipa": "/ə'bɔ:tiv/",
//     "definition": "*  tính từ\n- đẻ non\n=an abortive child+ đứa bé đẻ non\n- non yếu, chết non chết yểu; sớm thất bại\n=an abortive plan+ một kế hoạch sớm thất bại\n- (sinh vật học) không phát triển đầy đủ\n=an abortive organ+ một cơ quan không phát triển đầy đủ"
//   },
//   {
//     "word": "abortiveness",
//     "ipa": "/ə'bɔ:tivnis/",
//     "definition": "*  danh từ\n- sự đẻ non\n- sự non yếu, sự chết non chết yểu\n- (sinh vật học) sự không phát triển đầy đủ"
//   },
//   {
//     "word": "aboulia",
//     "ipa": "/ə'bauliə/",
//     "definition": "*  danh từ\n- (y học) chứng mất ý chí"
//   },
//   {
//     "word": "abound",
//     "ipa": "/ə'baund/",
//     "definition": "*  nội động từ\n- (+ in,  with) có rất nhiều, có thừa, nhan nhản, lúc nhúc, đầy dẫy\n=coal abounds in our country+ than đá có rất nhiều ở nước ta\n=to abound in courage+ có thừa can đảm"
//   },
//   {
//     "word": "abounding",
//     "ipa": "/ə'baundiɳ/",
//     "definition": "*  tính từ\n- nhiều, phong phú, thừa thãi"
//   },
//   {
//     "word": "about",
//     "ipa": "/ə'baut/",
//     "definition": "*  phó từ\n- xung quanh, quanh quẩn, đây đó, rải rác\n=he is somewhere about+ anh ta ở quanh quẩn đâu đó\n=rumours are about+ đây đó có tiếng đồn (về việc gì)\n- đằng sau\n=about turn!+ đằng sau quay\n- khoảng chừng, gần\n=about forty+ khoảng 40\n=it is about two o'clock+ bây giờ khoảng chừng hai giờ\n- vòng\n=to go a long way about+ đi đường vòng xa\n!about and about\n- (từ Mỹ,nghĩa Mỹ) rất giống nhau\n!to be about\n- bận (làm gì)\n- đã dậy được (sau khi ốm)\n- có mặt\n!about right\n- đúng, đúng đắn\n- tốt, được\n*  giới từ\n- về\n=to know much about Vietnam+ biết nhiều về Việt Nam\n=what shall we write about?+ chúng ta sẽ viết về cái gì bây giờ?\n- quanh quất, quanh quẩn đây đó, rải rác\n=to walk about the garden+ đi quanh quẩn trong vườn\n- xung quanh\n=the trees about the pound+ cây cối xung quanh ao\n- khoảng chừng, vào khoảng\n=about nightfall+ vào khoảng chập tối\n- bận, đang làm (gì...)\n=he is still about it+ hắn hãy còn bận làm việc đó\n=to go about one's work+ đi làm\n- ở (ai); trong người (ai), theo với (ai)\n=I have all the documents about me+ tôi có mang theo đầy đủ tài liệu\n=there's something nice about him+ ở anh ta có một cái gì đó hay hay\n!to be about to\n- sắp, sắp sửa\n=the train is about to start+ xe lửa sắp khởi hành\n=man about town+ tay ăn chơi, tay giao thiệp rộng\n=what are you about?+ anh muốn gì?, anh cần gì?\n- (từ hiếm,nghĩa hiếm) anh đang làm gì đấy?\n!what about?\n- (xem) what\n*  ngoại động từ\n- lái (thuyền...) theo hướng khác"
//   },
//   {
//     "word": "about-face",
//     "ipa": "/ə'bautfeis/",
//     "definition": "*  danh từ\n- (quân sự) sự quay đằng sau\n- sự trở mặt, sự thay đổi hẳn thái độ, sự thay đổi hẳn ý kiến\n*  nội động từ\n- (quân sự) quay đằng sau"
//   },
//   {
//     "word": "about-sledge",
//     "ipa": "/ə'baut,sledʤ/",
//     "definition": "*  danh từ\n- (kỹ thuật) búa tạ"
//   },
//   {
//     "word": "above",
//     "ipa": "/ə'bʌv/",
//     "definition": "*  phó từ\n- trên đầu, trên đỉnh đầu\n=clouds are drifting above+ mây đang bay trên đỉnh đầu\n- ở trên\n=as was started above+ như đã nói rõ ở trên\n=as was remarked above+ như đã nhận xét ở trên\n- trên thiên đường\n- lên trên; ngược dòng (sông); lên gác\n=a staircase leading above+ cầu thang lên gác\n=you will find a bridge above+ đi ngược dòng sông anh sẽ thấy một cái cầu\n- trên, hơn\n=they were all men of fifty and above+ họ tất cả đều năm mươi và trên năm mươi tuổi\n=over and above+ hơn nữa, vả lại, ngoài ra\n*  giới từ\n- ở trên\n=the plane was above the clouds+ máy bay ở trên mây\n- quá, vượt, cao hơn\n=this work is above my capacity+ công việc này quá khả năng tôi\n=he is above all the other boys in his class+ nó vượt tất cả những đứa trẻ khác trong lớp\n- trên, hơn\n=to value independence and freedom above all+ quý độc lập và tự do hơn tất cả\n=above all+ trước hết là, trước nhất là, trước tiên là\n!above oneself\n- lên mặt\n- phởn, bốc\n=to keep one's head above water+ giữ cho mình được an toàn; giữ khỏi mang công mắc nợ\n*  tính từ\n- ở trên, kể trên, nói trên\n=the above facts+ những sự việc kể trên\n=the above statements+ những lời phát biểu ở trên\n*  danh từ\n- the above cái ở trên; điều kể trên; điều nói trên"
//   },
//   {
//     "word": "above-board",
//     "ipa": "/ə'bʌv'bɔ:d/",
//     "definition": "*  tính từ & phó từ\n- thẳng thắn, không che đậy, không giấu giếm"
//   },
//   {
//     "word": "above-ground",
//     "ipa": "/ə'bʌv,graund/",
//     "definition": "*  tính từ\n- ở trên mặt đất\n- còn sống trên đời\n*  phó từ\n- ở trên mặt đất\n- lúc còn sống ở trên đời"
//   },
//   {
//     "word": "above-mentioned",
//     "ipa": "/ə'bʌv'menʃnd/",
//     "definition": "*  tính từ\n- kể trên, nói trên"
//   },
//   {
//     "word": "abracadabra",
//     "ipa": "/,æbrəkə'dæbrə/",
//     "definition": "*  danh từ\n- câu thần chú\n- lời nói khó hiểu"
//   },
//   {
//     "word": "abradant",
//     "ipa": "/ə'breidənt/",
//     "definition": "*  tính từ\n- làm mòn, mài mòn\n*  danh từ\n- chất mài mòn"
//   },
//   {
//     "word": "abrade",
//     "ipa": "/ə'breid/",
//     "definition": "*  ngoại động từ\n- làm trầy (da); cọ xơ ra\n- (kỹ thuật) mài mòn"
//   },
//   {
//     "word": "abranchial",
//     "ipa": "/ə'bræɳkiəl/",
//     "definition": "*  tính từ\n- (động vật học) không mang"
//   },
//   {
//     "word": "abranchiate",
//     "ipa": "/ə'bræɳkiəl/",
//     "definition": "*  tính từ\n- (động vật học) không mang"
//   },
//   {
//     "word": "abrasion",
//     "ipa": "/ə'breiʤn/",
//     "definition": "*  danh từ\n- sự làm trầy (da); sự cọ xơ ra; chỗ bị trầy da\n- (địa lý,địa chất),  (kỹ thuật) sự mài mòn"
//   },
//   {
//     "word": "abrasive",
//     "ipa": "/ə'breisiv/",
//     "definition": "*  tính từ\n- làm trầy (da)\n- để cọ xơ ra\n- để mài mòn\n*  danh từ\n- chất mài mòn"
//   },
//   {
//     "word": "abreast",
//     "ipa": "/ə'brest/",
//     "definition": "*  phó từ\n- cùng hàng, sóng hàng, ngang nhau; sát nhau, sát vai, bên cạnh\n=to walk abreast+ đi sóng hàng với nhau\n=abreast the times+ theo kịp thời đại\n!to keep abreast of (with)\n- (xem) keep"
//   },
//   {
//     "word": "abridge",
//     "ipa": "/ə'bridʤ/",
//     "definition": "*  ngoại động từ\n- rút ngắn lại, cô gọn, tóm tắt\n- hạn chế, giảm bớt (quyền...)\n- lấy, tước\n=to abridge somebody of his rights+ tước quyền lợi của ai"
//   },
//   {
//     "word": "abridgement",
//     "ipa": "/ə'bridʤmənt/",
//     "definition": "*  danh từ\n- sự rút ngắn, sự cô gọn, sự tóm tắt; bài tóm tắt sách, sách tóm tắt\n- sự hạn chế, sự giảm bớt"
//   },
//   {
//     "word": "abridgment",
//     "ipa": "/ə'bridʤmənt/",
//     "definition": "*  danh từ\n- sự rút ngắn, sự cô gọn, sự tóm tắt; bài tóm tắt sách, sách tóm tắt\n- sự hạn chế, sự giảm bớt"
//   },
//   {
//     "word": "abroach",
//     "ipa": "/ə'broutʃ/",
//     "definition": "*  tính từ\n- bị giùi lỗ; bị chọc thủng (thùng rượu để lấy rượu ra...)\n=to set a cask abroach+ giùi lỗ một thùng rượu, khui một thùng rượu"
//   },
//   {
//     "word": "abroad",
//     "ipa": "/ə'brɔ:d/",
//     "definition": "*  phó từ\n- ở nước ngoài, ra nước ngoài\n=to live abroad+ sống ở nước ngoài\n=to go abroad+ đi ra nước ngoài\n- khắp nơi, đang truyền đi khắp nơi\n=there is a runmour abroad that...+ khắp nơi đang có tin đồn rằng...\n=the schooimaster is abroad+ việc học hành bây giờ đang trở thành phổ biến\n- ngoài trời (đối với trong nhà)\n=life abroad is very healthy+ sống ở ngoài trời tốt cho sức khoẻ\n- (thông tục) nghĩ sai, nhầm, tưởng lầm\n=to be all abroad+ nghĩ sai hoàn toàn, hoàn toàn lầm lẫn\n!from abroad\n- từ nước ngoài\n=these machines were brought from abroad+ những chiếc máy này mang từ nước ngoài vào"
//   },
//   {
//     "word": "abrogate",
//     "ipa": "/'æbrougeit/",
//     "definition": "*  ngoại động từ\n- bãi bỏ, huỷ bỏ, thủ tiêu; bài trừ\n=backward customs musr be abrogated+ phải bài trừ những hủ tục\n=to abrogate a law+ huỷ bỏ một đạo luật"
//   },
//   {
//     "word": "abrogation",
//     "ipa": "/,æbrou'geiʃn/",
//     "definition": "*  danh từ\n- sự bãi bỏ, sự huỷ bỏ, sự thủ tiêu; sự bài trừ"
//   },
//   {
//     "word": "abrupt",
//     "ipa": "/ə'brʌpt/",
//     "definition": "*  tính từ\n- bất ngờ, đột ngột; vội vã\n=an abrupt turn+ chỗ ngoặc bất ngờ\n=an abrupt departure+ sự ra đi vội vã (đột ngột)\n- cộc lốc, lấc cấc, thô lỗ\n=an abrupt answers+ câu trả lời cộc lốc\n=abrupt manners+ cách cư xử lấc cấc\n- dốc đứng, hiểm trở, gian nan\n=abrupt coast+ bờ biển dốc đứng\n=the road to science is very abrupt+ con đường đi tới khoa học rất gian nan\n- trúc trắc, rời rạc (văn)\n- bị đốn, bị chặt cụt; như thể bị đốn, bị chặt cụt (cây...)"
//   },
//   {
//     "word": "abruption",
//     "ipa": "/ə'brʌpʃn/",
//     "definition": "*  danh từ\n- sự đứt rời, sự gãy rời"
//   },
//   {
//     "word": "abruptness",
//     "ipa": "/ə'brʌptnis/",
//     "definition": "*  danh từ\n- sự bất ngờ, sự đột ngột, sự vội vã\n- tính cộc lốc, tính lấc cấc; sự thô lỗ\n- thế dốc đứng, sự hiểm trở; sự gian nan\n- sự trúc trắc, sự rời rạc (văn)"
//   },
//   {
//     "word": "abscess",
//     "ipa": "/'æbsis/",
//     "definition": "*  danh từ\n- (y học) áp xe\n- (kỹ thuật) chỗ rỗ (ở kim loại)"
//   },
//   {
//     "word": "absciss",
//     "ipa": "/æb'sis/",
//     "definition": "*  danh từ abscisses\n- (toán học) độ hoành"
//   },
//   {
//     "word": "abscissa",
//     "ipa": "/æb'sisə/",
//     "definition": "*  danh từ,  số nhiều abscissae\n- (như) absciss"
//   },
//   {
//     "word": "abscissae",
//     "ipa": "/æb'sisə/",
//     "definition": "*  danh từ,  số nhiều abscissae\n- (như) absciss"
//   },
//   {
//     "word": "abscisse",
//     "ipa": "/æb'sis/",
//     "definition": "*  danh từ,  số nhiều abscisses\n- (như) absciss"
//   },
//   {
//     "word": "abscission",
//     "ipa": "/æb'siʤn/",
//     "definition": "*  danh từ\n- (y học) sự cắt bỏ"
//   },
//   {
//     "word": "abscond",
//     "ipa": "/əb'skɔnd/",
//     "definition": "*  nội động từ\n- lẫn trốn, bỏ trốn\n- trốn tránh pháp luật"
//   },
//   {
//     "word": "absconder",
//     "ipa": "/əb'skɔndə/",
//     "definition": "*  danh từ\n- người lẫn trốn, người bỏ trốn\n- người trốn tránh pháp luật"
//   },
//   {
//     "word": "absence",
//     "ipa": "/'æbsəns/",
//     "definition": "*  danh từ\n- sự vắng mặt, sự nghỉ (học), sự đi vắng; thời gian vắng mặt, lúc đi vắng\n=to have a long absence from school+ nghỉ học lâu\n- sự thiếu, sự không có\n=to carry out production in the absence of necessary machines+ sản xuất trong tình trạng thiếu những máy móc cần thiết\n- sự điểm danh\n=absence of mind+ sự lơ đãng\n=absence without leave+ sự nghỉ không phép\n!leave of absence\n- (xem) leave"
//   },
//   {
//     "word": "absent",
//     "ipa": "/'æbsənt/",
//     "definition": "*  tính từ\n- vắng mặt, đi vắng, nghỉ\n- lơ đãng\n=an absent air+ vẻ lơ đãng\n=to answer in an absent way+ trả lời một cách lơ đãng\n*  động từ phãn thân\n- vắng mặt, đi vắng, nghỉ\n=to absent oneself from school+ nghỉ học\n=to absent oneself from work+ vắng mặt không đi làm"
//   },
//   {
//     "word": "absent-minded",
//     "ipa": "/'æbsənt'maindid/",
//     "definition": "*  tính từ\n- lơ đãng"
//   },
//   {
//     "word": "absent-mindedness",
//     "ipa": "/'æbsənt'maindidnis/",
//     "definition": "*  danh từ\n- sự lơ đãng, tính lơ đãng"
//   },
//   {
//     "word": "absentee",
//     "ipa": "/,æbsən'ti:/",
//     "definition": "*  danh từ\n- người vắng mặt, người đi vắng, người nghỉ\n- địa chủ không ở thường xuyên tại nơi có ruộng đất"
//   },
//   {
//     "word": "absenteeism",
//     "ipa": "/,æbsən'ti:izm/",
//     "definition": "*  danh từ\n- sự hay vắng mặt, sự vắng mặt không có lý do chính đáng (ở công sở, ở xí nghiệp...)"
//   },
//   {
//     "word": "absently",
//     "ipa": "/'æbsəntli/",
//     "definition": "*  phó từ\n- lơ đãng"
//   },
//   {
//     "word": "absinth",
//     "ipa": "/'æbsinθ/",
//     "definition": "*  danh từ\n- cây apxin, cây ngải đắng\n- tinh dầu apxin\n- rượu apxin"
//   },
//   {
//     "word": "absinthe",
//     "ipa": "/'æbsinθ/",
//     "definition": "*  danh từ\n- cây apxin, cây ngải đắng\n- tinh dầu apxin\n- rượu apxin"
//   },
//   {
//     "word": "absinthian",
//     "ipa": "/æb'sinθiən/",
//     "definition": "*  tính từ\n- (thuộc) apxin"
//   },
//   {
//     "word": "absolute",
//     "ipa": "/'æbsəlu:t/",
//     "definition": "*  tính từ\n- tuyệt đối, hoàn toàn; thuần tuý, nguyên chất\n=absolute confidence in the Party's leadership+ sự tin tưởng tuyệt đối vào sự lãnh đạo của Đảng\n=absolute music+ âm nhạc thuần tuý\n=absolute alcohol+ rượu nguyên chất\n- chuyên chế, độc đoán\n=absolute monarchy+ nền quân chủ chuyên chế\n- xác thực, đúng sự thực, chắc chắn\n=absolute evidence+ chứng cớ xác thực\n- vô điều kiện\n=an absolute promise+ lời hứa vô điều kiện"
//   },
//   {
//     "word": "absolutely",
//     "ipa": "/'æbsəlu:tli/",
//     "definition": "*  phó từ\n- tuyệt đối, hoàn toàn\n=to be absolutely wrong+ hoàn toàn sai lầm, hoàn toàn trái\n- chuyên chế, độc đoán\n=to govern absolutely+ cai trị một cách chuyên chế\n- vô điều kiện\n- (thông tục) nhất định, chắc chắn; tất nhiên; hoàn toàn như vậy, đúng như vậy"
//   },
//   {
//     "word": "absoluteness",
//     "ipa": "/'æbsəlu:tnis/",
//     "definition": "*  danh từ\n- tính tuyệt đối, tính hoàn toàn"
//   },
//   {
//     "word": "absolution",
//     "ipa": "/,æbsə'lu:ʃn/",
//     "definition": "*  danh từ\n- (pháp lý) sự tha tội, sự miễn xá\n- (tôn giáo) sự xá tội"
//   },
  

// ];

// class TreeNode {
//   constructor(word, meaning, ipa) {
//     this.word = word;
//     this.meaning = meaning;
//     this.ipa = ipa;
//     this.left = null;
//     this.right = null;
//   }
// }


// //root == null
// class DictionaryTree {
//   constructor() {
//     this.root = null;
//   }

//   //Chen 
//   Chen(word, meaning, ipa) {
//     const newNode = new TreeNode(word, meaning, ipa);
//     if (this.root === null) 
//       this.root = newNode;
//     else 
//       this._ChenNode(this.root, newNode);
//   }

//   _ChenNode(node, newNode) {
//     if (newNode.word < node.word) {
//       if (node.left === null) {
//         node.left = newNode;
//       } else {
//         this._ChenNode(node.left, newNode);
//       }
//     } else if (newNode.word > node.word) {
//       if (node.right === null) {
//         node.right = newNode;
//       } else {
//         this._ChenNode(node.right, newNode);
//       }
//     }
//   }

//   search(word) {
//     return this._searchNode(this.root, word);
//   }

//   _searchNode(node, word) {
//     //neu khong co node trong data tra ve null
//     if (node === null) 
//       return null;
//     if (word < node.word) {
//       //de quy
//       return this._searchNode(node.left, word);
//     } else if (word > node.word) {
//       return this._searchNode(node.right, word);
//     } else 
//       return { meaning: node.meaning, ipa: node.ipa };
//   }

//   loadFromJson(data) {
//     data.forEach(entry => {
//       this.Chen(entry.word, entry.definition, entry.ipa);
//     });
//   }
// }


// const dictTree = new DictionaryTree();
// dictTree.loadFromJson(data);

// const Search = ({ word, setWord }) => {
//   const [meaning, setMeaning] = useState(null); // Trạng thái tìm kiếm
//   const [ipa, setIpa] = useState(null);// Trạng thái tìm kiếm
//   const [searched, setSearched] = useState(false); // Trạng thái tìm kiếm

//   const searchHandler = () => {
//     setSearched(true); //đã tìm kiếm
//     const result = dictTree.search(word);
//     if (result) {
//       setMeaning(result.meaning || null);//neu khong co word, else
//       setIpa(result.ipa || null);
//     } else {
//       setMeaning("Từ không có trong từ điển!");
//       setIpa(null);
//     }
//   };

//   const onKeyPress = (e) => {
//     if (e.key === "Enter") 
//       searchHandler();
//   };

//   return (
//     <div className="max-w-3xl mx-auto my-2">
//       <div className="flex relative">
//         <input
//           placeholder="Nhập vào chữ cái bạn muốn tìm..."
//           value={word}
//           onKeyDown={(e) => onKeyPress(e)}
//           onChange={(e) => setWord(e.target.value)}
//           className="border bg-gray-100 text-black focus:outline-none rounded-lg p-4 h-10 w-[100%]"
//         />
//         <BiSearchAlt2
//           onClick={searchHandler}
//           className="absolute right-2 cursor-pointer text-2xl text-pink-500 top-[20%]"
//         />
//       </div>
      
//       <div className="mt-4 text-lg text-left">
//         {searched && (
//           <div>
//             <strong>Kết quả:</strong> {meaning || "Từ không có trong từ điển!"}{/*  dung or */}
//           </div>
//         )}
//       </div>

//       {ipa && (
//         <div className="mt-2 text-sm text-gray-500 text-left">
//           <strong>IPA:</strong> {ipa}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;
