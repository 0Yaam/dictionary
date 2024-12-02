import React, { useState } from "react";
import Header from "../Header";
import hi from "../../Assets/excited.png"
import voice1 from "../../Assets/Audio/voice1.mp3"

const VocabularyPopup = () => {
  const [selectedPhrase, setSelectedPhrase] = useState(null);

  const DataVoca = {
    "Travel": {
      "word": "Travel",
      "type": "v",
      "pronunciation": "/ˈtrævəl/",
      "meaning": "Du lịch",
      "definition": "To go on a trip or journey, typically to a distant or unfamiliar place (Đi du lịch hoặc hành trình, thường là đến một nơi xa hoặc không quen thuộc).",
      "examples": [
        "I love to travel to new countries every year.",
        "He plans to travel around the world next summer."
      ]
    },
    "amazing": {
      "word": "Amazing",
      "type": "adj",
      "pronunciation": "/əˈmeɪzɪŋ/",
      "meaning": "Tuyệt vời",
      "definition": "Causing great surprise or wonder; astonishing (Gây ngạc nhiên hoặc kinh ngạc; đáng kinh ngạc).",
      "examples": [
        "The view from the mountain top was amazing.",
        "She had an amazing time at the concert."
      ]
    },
    "experience": {
      "word": "Experience",
      "type": "n",
      "pronunciation": "/ɪkˈspɪəriəns/",
      "meaning": "Trải nghiệm",
      "definition": "An event or occurrence that leaves an impression on someone (Một sự kiện hoặc sự việc để lại ấn tượng đối với ai đó).",
      "examples": [
        "The travel experience was unforgettable.",
        "He gained a lot of experience from the internship."
      ]
    },
    "an amazing experience": {
      "word": "An amazing experience",
      "type": "n",
      "pronunciation": "/ən əˈmeɪzɪŋ ɪkˈspɪəriəns/",
      "meaning": "Một trải nghiệm tuyệt vời",
      "definition": "An extremely positive and remarkable encounter (Một trải nghiệm cực kỳ tích cực và đáng chú ý).",
      "examples": [
        "Visiting the Grand Canyon was an amazing experience.",
        "She described her trip to Paris as an amazing experience."
      ]
    },
    "open": {
      "word": "Open",
      "type": "v",
      "pronunciation": "/ˈoʊpən/",
      "meaning": "Mở",
      "definition": "To cause or allow access; to make available (Gây ra hoặc cho phép truy cập; làm cho có sẵn).",
      "examples": [
        "She opened the door and greeted the guests.",
        "He opened his mind to new possibilities."
      ]
    },
    "mind": {
      "word": "Mind",
      "type": "n",
      "pronunciation": "/maɪnd/",
      "meaning": "Tâm trí",
      "definition": "The element of a person that enables them to be aware of the world and their experiences (Yếu tố của một người cho phép họ nhận thức về thế giới và trải nghiệm của họ).",
      "examples": [
        "She has a sharp mind and can solve complex problems.",
        "He made up his mind to study abroad."
      ]
    },
    "open your mind to": {
      "word": "Open your mind to",
      "type": "v",
      "pronunciation": "/ˈoʊpən jɔːr maɪnd tuː/",
      "meaning": "Mở lòng bạn với",
      "definition": "To be receptive to new ideas, perspectives, or experiences (Chấp nhận ý tưởng, quan điểm hoặc trải nghiệm mới).",
      "examples": [
        "Traveling to different countries can help you open your mind to new cultures.",
        "You should open your mind to other people's opinions."
      ]
    },
    "new": {
      "word": "New",
      "type": "adj",
      "pronunciation": "/nuː/",
      "meaning": "Mới",
      "definition": "Not existing before; made, introduced, or discovered recently or now for the first time (Không tồn tại trước đây; được tạo ra, giới thiệu hoặc khám phá gần đây hoặc lần đầu tiên).",
      "examples": [
        "She bought a new car last week.",
        "I read a new book yesterday."
      ]
    },
    "culture": {
      "word": "Culture",
      "type": "n",
      "pronunciation": "/ˈkʌltʃər/",
      "meaning": "Văn hóa",
      "definition": "The customs, arts, social institutions, and achievements of a particular nation, people, or other social group (Các phong tục, nghệ thuật, tổ chức xã hội và thành tựu của một quốc gia, dân tộc hoặc nhóm xã hội khác nhau).",
      "examples": [
        "Learning about different cultures can be a fascinating experience.",
        "The culture of Japan is rich in tradition and history."
      ]
    },
    "perspective": {
      "word": "Perspective",
      "type": "n",
      "pronunciation": "/pərˈspektɪv/",
      "meaning": "Quan điểm",
      "definition": "A particular attitude or way of regarding something; a point of view (Một thái độ hoặc cách nhìn cụ thể về một điều gì đó; một quan điểm).",
      "examples": [
        "From her perspective, the situation seemed hopeless.",
        "Having a positive perspective can help you overcome challenges."
      ]
    },



    "allow": {
      "word": "Allow",
      "type": "v",
      "pronunciation": "/əˈlaʊ/",
      "meaning": "Cho phép",
      "definition": "To give permission for or permit (Cung cấp sự cho phép hoặc cho phép).",
      "examples": [
        "Parents must allow their children to express themselves.",
        "The teacher allowed the students to leave early."
      ]
    },
    "explore": {
      "word": "Explore",
      "type": "v",
      "pronunciation": "/ɪkˈsplɔːr/",
      "meaning": "Khám phá",
      "definition": "To travel through (an unfamiliar area) in order to learn about it (Đi qua một khu vực xa lạ để tìm hiểu về nó).",
      "examples": [
        "We love to explore new cities when we travel.",
        "Scientists explore the ocean to discover new species."
      ]
    },
    "breathtaking": {
      "word": "Breathtaking",
      "type": "adj",
      "pronunciation": "/ˈbreθˌteɪkɪŋ/",
      "meaning": "Đẹp đến ngạt thở",
      "definition": "Extremely impressive or stunning (Vô cùng ấn tượng hoặc tuyệt đẹp).",
      "examples": [
        "The view from the mountain was absolutely breathtaking.",
        "The actor's performance was breathtaking."
      ]
    },
    "landscape": {
      "word": "Landscape",
      "type": "n",
      "pronunciation": "/ˈlændˌskeɪp/",
      "meaning": "Cảnh quan",
      "definition": "The visible features of an area of land, its landforms, and how they integrate with natural or man-made features (Những đặc điểm có thể nhìn thấy của một khu vực đất, hình dạng địa hình của nó và cách chúng tương tác với các đặc điểm tự nhiên hoặc do con người tạo ra).",
      "examples": [
        "The landscape of the desert is quite different from the forest.",
        "They painted beautiful landscapes of the countryside."
      ]
    },
    "breathtaking landscape": {
      "word": "Breathtaking landscape",
      "type": "n",
      "pronunciation": "/ˈbreθˌteɪkɪŋ ˈlændˌskeɪp/",
      "meaning": "Cảnh quan đẹp đến ngạt thở",
      "definition": "An extremely impressive or stunning view of natural scenery (Một cảnh quan tự nhiên vô cùng ấn tượng hoặc tuyệt đẹp).",
      "examples": [
        "The sunrise over the ocean created a breathtaking landscape.",
        "We hiked to the top of the hill to view the breathtaking landscape."
      ]
    },



    "taste": {
      "word": "Taste",
      "type": "v",
      "pronunciation": "/teɪst/",
      "meaning": "Thưởng thức",
      "definition": "To sample or experience the flavor of something (Mẫu hoặc trải nghiệm hương vị của một thứ gì đó).",
      "examples": [
        "I love to taste new kinds of desserts.",
        "She tasted the soup to see if it needed more salt."
      ]
    },
    "delicious": {
      "word": "Delicious",
      "type": "adj",
      "pronunciation": "/dɪˈlɪʃəs/",
      "meaning": "Ngon lành, ngon",
      "definition": "Highly enjoyable to the senses, especially to the taste or smell (Rất thú vị cho các giác quan, đặc biệt là vị giác hoặc mùi).",
      "examples": [
        "The cake was delicious and had a rich chocolate flavor.",
        "We enjoyed a delicious meal at the new restaurant."
      ]
    },
    "cuisine": {
      "word": "Cuisine",
      "type": "n",
      "pronunciation": "/kwɪˈziːn/",
      "meaning": "Ẩm thực",
      "definition": "A specific style or type of cooking, often associated with a particular culture or region (Một phong cách hoặc loại nấu nướng cụ thể, thường liên quan đến một văn hóa hoặc vùng đất cụ thể).",
      "examples": [
        "Italian cuisine is known for its use of fresh ingredients.",
        "We are exploring different cuisines from around the world."
      ]
    },
    "delicious cuisines": {
      "word": "Delicious cuisines",
      "type": "n",
      "pronunciation": "/dɪˈlɪʃəs kwɪˈzi:n/",
      "meaning": "Các món ăn ngon lành",
      "definition": "Tasty and enjoyable dishes from various culinary traditions (Những món ăn ngon lành từ các truyền thống ẩm thực khác nhau).",
      "examples": [
        "The festival featured delicious cuisines from various countries.",
        "I love trying delicious cuisines from different cultures."
      ]
    },





    "and": {
      "word": "And",
      "type": "conj",
      "pronunciation": "/ænd/",
      "meaning": "Và",
      "definition": "Used to connect words, phrases, or clauses together (Được sử dụng để kết nối các từ, cụm từ hoặc mệnh đề với nhau).",
      "examples": [
        "I like pizza and pasta.",
        "She went to the store and bought some fruit."
      ]
    },
    "meet": {
      "word": "Meet",
      "type": "v",
      "pronunciation": "/miːt/",
      "meaning": "Gặp gỡ",
      "definition": "To come into the presence or company of someone (Đến gần hoặc gặp ai đó).",
      "examples": [
        "I am excited to meet my friends for dinner.",
        "They met at the park to discuss the project."
      ]
    },
    "fascinating": {
      "word": "Fascinating",
      "type": "adj",
      "pronunciation": "/ˈfæsɪˌneɪtɪŋ/",
      "meaning": "Hấp dẫn",
      "definition": "Extremely interesting or captivating (Vô cùng thú vị hoặc lôi cuốn).",
      "examples": [
        "The documentary about space was absolutely fascinating.",
        "She has a fascinating story about her travels."
      ]
    },
    "person": {
      "word": "Person",
      "type": "n",
      "pronunciation": "/ˈpɜːrsən/",
      "meaning": "Người",
      "definition": "An individual human being (Một cá nhân con người).",
      "examples": [
        "She is a kind person.",
        "Each person has their own unique qualities."
      ]
    },
    "people": {
      "word": "People",
      "type": "n",
      "pronunciation": "/ˈpiːpl/",
      "meaning": "Người",
      "definition": "Human beings in general, considered collectively (Những con người nói chung, được coi là một tập thể).",
      "examples": [
        "People from all over the world attend the event.",
        "There were many people at the concert last night."
      ]
    },
    "fascinating people": {
      "word": "Fascinating people",
      "type": "n",
      "pronunciation": "/ˈfæsɪˌneɪtɪŋ ˈpiːpl/",
      "meaning": "Những người hấp dẫn",
      "definition": "Individuals who are extremely interesting or captivating (Những cá nhân rất thú vị hoặc lôi cuốn).",
      "examples": [
        "The conference was full of fascinating people from different fields.",
        "She met many fascinating people during her travels."
      ]
    },




    "embark on": {
      "word": "Embark on",
      "type": "v",
      "pronunciation": "/ɪmˈbɑːrk ɒn/",
      "meaning": "Bắt đầu",
      "definition": "To start or begin a journey, task, or new experience (Bắt đầu hoặc khởi đầu một cuộc hành trình, nhiệm vụ hoặc trải nghiệm mới).",
      "examples": [
        "They are about to embark on a long journey to the mountains.",
        "She decided to embark on a new adventure in the city."
      ]
    },
    "adventure": {
      "word": "Adventure",
      "type": "n",
      "pronunciation": "/ədˈvɛntʃər/",
      "meaning": "Cuộc phiêu lưu",
      "definition": "An exciting or daring experience, often involving unknown or risky activities (Một trải nghiệm thú vị hoặc liều lĩnh, thường liên quan đến các hoạt động không rõ ràng hoặc nguy hiểm).",
      "examples": [
        "The trip turned into an unforgettable adventure.",
        "They went on an adventure to explore the hidden caves."
      ]
    },



    "immerse": {
      "word": "Immerse",
      "type": "v",
      "pronunciation": "/ɪˈmɜːrs/",
      "meaning": "Đắm mình",
      "definition": "To involve oneself deeply or fully in a particular activity or experience (Đắm mình hoặc tham gia một cách sâu sắc vào một hoạt động hoặc trải nghiệm cụ thể).",
      "examples": [
        "She immersed herself in the study of art history.",
        "He decided to immerse himself in the local culture during his trip."
      ]
    },
    "immerse ... in ...": {
      "word": "Immerse ... in ...",
      "type": "v",
      "pronunciation": "/ɪˈmɜːrs ɪn/",
      "meaning": "Đắm mình trong",
      "definition": "To completely involve or submerge oneself in a particular environment, culture, or experience (Hoàn toàn đắm mình hoặc ngập lặn trong một môi trường, văn hóa hoặc trải nghiệm cụ thể).",
      "examples": [
        "They immersed themselves in the vibrant local tradition during their travels.",
        "She wanted to immerse herself in the language by living with a local family."
      ]
    },
    "local": {
      "word": "Local",
      "type": "adj",
      "pronunciation": "/ˈloʊkəl/",
      "meaning": "Địa phương",
      "definition": "Relating to or occurring in a particular area or neighborhood (Liên quan đến hoặc xảy ra trong một khu vực hoặc khu phố cụ thể).",
      "examples": [
        "The market sells local produce and handmade crafts.",
        "Local restaurants often offer a taste of the regional cuisine."
      ]
    },
    "tradition": {
      "word": "Tradition",
      "type": "n",
      "pronunciation": "/trəˈdɪʃən/",
      "meaning": "Truyền thống",
      "definition": "The transmission of customs or beliefs from generation to generation, or the customs or beliefs themselves (Sự truyền đạt phong tục hoặc niềm tin từ thế hệ này sang thế hệ khác, hoặc chính các phong tục hoặc niềm tin đó).",
      "examples": [
        "The tradition of storytelling is passed down through generations.",
        "Each culture has its own unique traditions and customs."
      ]
    },
    "local tradition": {
      "word": "Local tradition",
      "type": "n",
      "pronunciation": "/ˈloʊkəl trəˈdɪʃən/",
      "meaning": "Truyền thống địa phương",
      "definition": "Customs, practices, or beliefs that are specific to a particular region or community (Phong tục, thực hành hoặc niềm tin cụ thể cho một khu vực hoặc cộng đồng nhất định).",
      "examples": [
        "The local tradition of celebrating harvest is important to the community.",
        "She learned about local traditions by participating in the village's annual festival."
      ]
    },

    "visit": {
      "word": "Visit",
      "type": "v",
      "pronunciation": "/ˈvɪzɪt/",
      "meaning": "Tham quan",
      "definition": "To go to a place in order to see or spend time there (Đi đến một nơi để xem hoặc dành thời gian ở đó).",
      "examples": [
        "I plan to visit the museum next weekend.",
        "They visited the famous cathedral during their trip."
      ]
    },
    "stunning": {
      "word": "Stunning",
      "type": "adj",
      "pronunciation": "/ˈstʌnɪŋ/",
      "meaning": "Đẹp đến ngạt thở",
      "definition": "Extremely impressive or attractive (Rất ấn tượng hoặc hấp dẫn).",
      "examples": [
        "The view from the mountaintop was absolutely stunning.",
        "She wore a stunning red dress at the event."
      ]
    },
    "landmark": {
      "word": "Landmark",
      "type": "n",
      "pronunciation": "/ˈlændmɑːrk/",
      "meaning": "Di tích",
      "definition": "A famous or important feature of a place, especially one that is easily recognized (Một đặc điểm nổi tiếng hoặc quan trọng của một địa điểm, đặc biệt là một đặc điểm dễ nhận biết).",
      "examples": [
        "The Eiffel Tower is one of the most iconic landmarks in the world.",
        "The old bridge is a historical landmark in the city."
      ]
    },
    "stunning landmark": {
      "word": "Stunning landmark",
      "type": "n",
      "pronunciation": "/ˈstʌnɪŋ ˈlændmɑːrk/",
      "meaning": "Di tích nổi bật đẹp đến ngạt thở",
      "definition": "An extremely impressive or breathtaking famous feature of a place (Một đặc điểm nổi tiếng vô cùng ấn tượng hoặc đẹp đến ngạt thở của một địa điểm).",
      "examples": [
        "The Taj Mahal is a stunning landmark in India.",
        "The Grand Canyon is a stunning landmark that attracts millions of tourists."
      ]
    },



    "engage in": {
      "word": "Engage in",
      "type": "v",
      "pronunciation": "/ɪnˈɡeɪdʒ ɪn/",
      "meaning": "Tham gia vào",
      "definition": "To participate or become involved in an activity (Tham gia hoặc trở thành một phần trong một hoạt động).",
      "examples": [
        "She decided to engage in volunteer work to help the community.",
        "They engaged in a heated debate about politics."
      ]
    },
    "thrilling": {
      "word": "Thrilling",
      "type": "adj",
      "pronunciation": "/ˈθrɪlɪŋ/",
      "meaning": "Đầy hồi hộp",
      "definition": "Very exciting or exhilarating (Rất hấp dẫn hoặc làm thăng hoa).",
      "examples": [
        "The roller coaster ride was absolutely thrilling.",
        "He had a thrilling experience while skydiving."
      ]
    },
    "activity": {
      "word": "Activity",
      "type": "n",
      "pronunciation": "/ækˈtɪvəti/",
      "meaning": "Hoạt động",
      "definition": "Something that is done for enjoyment, leisure, or a specific purpose (Một việc được thực hiện để vui chơi, giải trí hoặc mục đích cụ thể).",
      "examples": [
        "Swimming is a fun activity to do during the summer.",
        "Yoga is a relaxing activity that improves flexibility."
      ]
    },
    "thrilling activities": {
      "word": "Thrilling activities",
      "type": "n",
      "pronunciation": "/ˈθrɪlɪŋ ækˈtɪvətiz/",
      "meaning": "Những hoạt động đầy hồi hộp",
      "definition": "Exciting or exhilarating things or experiences that one can participate in (Những điều hoặc trải nghiệm thú vị hoặc làm thăng hoa mà người ta có thể tham gia).",
      "examples": [
        "Skydiving and bungee jumping are thrilling activities.",
        "They enjoy thrilling activities like hiking in the mountains and exploring caves."
      ]
    },

    "each": {
      "word": "Each",
      "type": "adj",
      "pronunciation": "/iːtʃ/",
      "meaning": "Mỗi",
      "definition": "Every one of two or more people or things, regarded and identified separately (Mỗi người hoặc vật trong hai hoặc nhiều người hoặc vật, được coi và nhận dạng riêng biệt).",
      "examples": [
        "Each of the students received a certificate.",
        "She gave each of her friends a unique gift."
      ]
    },
    "journey": {
      "word": "Journey",
      "type": "n",
      "pronunciation": "/ˈdʒɜːrni/",
      "meaning": "Cuộc hành trình",
      "definition": "An act of traveling from one place to another, especially when involving a considerable distance (Hành trình từ một nơi đến nơi khác, đặc biệt là khi liên quan đến một khoảng cách đáng kể).",
      "examples": [
        "Their journey to the mountains took three days.",
        "The journey was long, but the views were breathtaking."
      ]
    },
    "bring": {
      "word": "Bring",
      "type": "v",
      "pronunciation": "/brɪŋ/",
      "meaning": "Đưa đến",
      "definition": "To cause to come to a place or position (Gây ra để đến một nơi hoặc vị trí nào đó).",
      "examples": [
        "Please bring the documents to the meeting.",
        "She brought her friend to the party."
      ]
    },
    "closer to": {
      "word": "Closer to",
      "type": "expression",
      "pronunciation": "/ˈkloʊsər tuː/",
      "meaning": "Gần hơn",
      "definition": "At a shorter distance or at a more advanced point in progress or development (Ở một khoảng cách ngắn hơn hoặc ở một điểm tiến triển hoặc phát triển cao hơn).",
      "examples": [
        "We are getting closer to finishing the project.",
        "The new technology brings us closer to understanding the universe."
      ]
    },
    "bring … closer to": {
      "word": "Bring … closer to",
      "type": "v",
      "pronunciation": "/brɪŋ … ˈkloʊsər tuː/",
      "meaning": "Đưa … gần hơn",
      "definition": "To cause to become more connected or familiar with something (Gây ra để trở nên liên kết hoặc quen thuộc hơn với điều gì đó).",
      "examples": [
        "The experience brought me closer to nature.",
        "Her actions brought the team closer to achieving their goal."
      ]
    },
    "understand": {
      "word": "Understand",
      "type": "v",
      "pronunciation": "/ˌʌndərˈstænd/",
      "meaning": "Hiểu",
      "definition": "To comprehend the meaning or nature of something (Hiểu ý nghĩa hoặc bản chất của một cái gì đó).",
      "examples": [
        "I understand the problem now.",
        "It's important to understand the rules before playing the game."
      ]
    },
    "world": {
      "word": "World",
      "type": "n",
      "pronunciation": "/wɜːrld/",
      "meaning": "Thế giới",
      "definition": "The earth, together with all of its countries, peoples, and natural features (Trái đất, cùng với tất cả các quốc gia, dân tộc và đặc điểm tự nhiên của nó).",
      "examples": [
        "She traveled around the world to explore different cultures.",
        "The world is becoming more connected due to technology."
      ]
    },




    "additionally": {
      "word": "Additionally",
      "type": "adv",
      "pronunciation": "/əˈdɪʃənəli/",
      "meaning": "Hơn nữa, thêm vào đó",
      "definition": "In addition; also (Ngoài ra; cũng vậy).",
      "examples": [
        "Additionally, we offer a 10% discount for early bookings.",
        "The course covers essential topics. Additionally, it provides practical examples."
      ]
    },
    "travel": {
      "word": "Travel",
      "type": "v",
      "pronunciation": "/ˈtrævəl/",
      "meaning": "Du lịch",
      "definition": "To go on a journey or trip (Đi du lịch hoặc chuyến đi).",
      "examples": [
        "I love to travel and explore new countries.",
        "They traveled across Europe during their summer vacation."
      ]
    },
    "offer": {
      "word": "Offer",
      "type": "v",
      "pronunciation": "/ˈɒfər/",
      "meaning": "Cung cấp, mang lại",
      "definition": "To present or provide something for someone to consider, accept, or reject (Trình bày hoặc cung cấp một cái gì đó để ai đó xem xét, chấp nhận hoặc từ chối).",
      "examples": [
        "They offer great customer service.",
        "The hotel offers a wide range of amenities."
      ]
    },
    "chance": {
      "word": "Chance",
      "type": "n",
      "pronunciation": "/tʃæns/",
      "meaning": "Cơ hội",
      "definition": "A possibility or opportunity (Một khả năng hoặc cơ hội).",
      "examples": [
        "You have a chance to win a free ticket.",
        "This is your chance to prove yourself."
      ]
    },
    "offer … a chance": {
      "word": "Offer … a chance",
      "type": "v",
      "pronunciation": "/ˈɒfər … ə tʃæns/",
      "meaning": "Cung cấp cho … một cơ hội",
      "definition": "To provide an opportunity for someone (Cung cấp cơ hội cho ai đó).",
      "examples": [
        "The competition offers you a chance to win a scholarship.",
        "This new project offers the team a chance to innovate."
      ]
    },
    "break": {
      "word": "Break",
      "type": "v",
      "pronunciation": "/breɪk/",
      "meaning": "Phá vỡ",
      "definition": "To separate or cause to separate into pieces (Chia tách hoặc gây ra chia tách thành các mảnh).",
      "examples": [
        "She accidentally broke the glass.",
        "The sound of the glass breaking echoed through the room."
      ]
    },
    "free": {
      "word": "Free",
      "type": "adj",
      "pronunciation": "/friː/",
      "meaning": "Tự do",
      "definition": "Not under the control or in the power of another; able to act or be done as one wishes (Không bị kiểm soát hoặc nằm trong quyền lực của người khác; có thể hành động hoặc thực hiện như mong muốn).",
      "examples": [
        "I feel free when I go for a walk in nature.",
        "She left the office early to enjoy a free afternoon."
      ]
    },
    "routine": {
      "word": "Routine",
      "type": "n",
      "pronunciation": "/ruːˈtiːn/",
      "meaning": "Thói quen",
      "definition": "A sequence of actions regularly followed (Một chuỗi hành động thường xuyên được thực hiện).",
      "examples": [
        "His daily routine includes exercise, work, and reading.",
        "She has a morning routine to start her day productively."
      ]
    },
    "break free from …": {
      "word": "Break free from …",
      "type": "v",
      "pronunciation": "/breɪk friː frɒm/",
      "meaning": "Thoát khỏi",
      "definition": "To escape or liberate oneself from a situation, habit, or constraint (Thoát ra hoặc giải phóng bản thân khỏi một tình huống, thói quen hoặc ràng buộc).",
      "examples": [
        "He decided to break free from his routine and travel the world.",
        "She finally broke free from the constraints of her old job."
      ]
    },





    "discover": {
      "word": "Discover",
      "type": "v",
      "pronunciation": "/dɪˈskʌvər/",
      "meaning": "Khám phá",
      "definition": "To find or become aware of something for the first time (Tìm thấy hoặc nhận thức được một cái gì đó lần đầu).",
      "examples": [
        "She discovered a hidden gem in the countryside.",
        "They discovered the secret to the ancient puzzle."
      ]
    },
    "hidden": {
      "word": "Hidden",
      "type": "adj",
      "pronunciation": "/ˈhɪdn/",
      "meaning": "Ẩn giấu",
      "definition": "Not easily noticed or detected; concealed (Không dễ thấy hoặc phát hiện; che giấu).",
      "examples": [
        "The hidden treasure was buried deep in the jungle.",
        "He found a hidden door behind the bookshelf."
      ]
    },
    "treasure": {
      "word": "Treasure",
      "type": "n",
      "pronunciation": "/ˈtrɛʒər/",
      "meaning": "Kho báu",
      "definition": "Valuable objects, money, or possessions that are considered precious or of great worth (Đồ vật, tiền bạc hoặc tài sản có giá trị được coi là quý giá hoặc vô cùng có giá trị).",
      "examples": [
        "Pirates are often depicted searching for buried treasure.",
        "The museum displayed treasures from ancient civilizations."
      ]
    },
    "hidden treasure": {
      "word": "Hidden treasure",
      "type": "n",
      "pronunciation": "/ˈhɪdn ˈtrɛʒər/",
      "meaning": "Kho báu ẩn giấu",
      "definition": "Valuable objects, money, or possessions that are concealed or not easily discovered (Đồ vật, tiền bạc hoặc tài sản có giá trị được che giấu hoặc không dễ dàng khám phá).",
      "examples": [
        "Many adventurers dream of finding hidden treasure.",
        "The explorers searched the cave for any signs of hidden treasure."
      ]
    },





    "create": {
      "word": "Create",
      "type": "v",
      "pronunciation": "/kriˈeɪt/",
      "meaning": "Tạo ra",
      "definition": "To bring into existence; produce or make (Mang vào tồn tại; sản xuất hoặc tạo ra).",
      "examples": [
        "She created a beautiful painting for the exhibition.",
        "The company aims to create innovative solutions."
      ]
    },
    "lifelong": {
      "word": "Lifelong",
      "type": "adj",
      "pronunciation": "/ˈlaɪflɔŋ/",
      "meaning": "Suốt đời",
      "definition": "Lasting or continuing for the duration of a person's life (Kéo dài hoặc tiếp tục trong suốt cuộc đời của một người).",
      "examples": [
        "They shared a lifelong friendship that stood the test of time.",
        "His lifelong ambition was to become a doctor."
      ]
    },
    "memory": {
      "word": "Memory",
      "type": "n",
      "pronunciation": "/ˈmeməri/",
      "meaning": "Kỷ niệm",
      "definition": "The faculty by which the mind stores and remembers information (Khả năng mà tâm trí lưu trữ và ghi nhớ thông tin).",
      "examples": [
        "She has a vivid memory of her childhood.",
        "The memory of their last vacation still brings her joy."
      ]
    },
    "lifelong memory": {
      "word": "Lifelong memory",
      "type": "n",
      "pronunciation": "/ˈlaɪflɔŋ ˈmeməri/",
      "meaning": "Kỷ niệm suốt đời",
      "definition": "A memory that lasts or is cherished throughout a person's life (Một kỷ niệm kéo dài hoặc được trân trọng suốt cuộc đời của một người).",
      "examples": [
        "Their wedding day became a lifelong memory for both of them.",
        "The trip to Paris was a lifelong memory for her."
      ]
    },





    "pack": {
      "word": "Pack",
      "type": "v",
      "pronunciation": "/pæk/",
      "meaning": "Gói, đóng gói",
      "definition": "To put items or belongings into a container or bag (Đặt các vật phẩm hoặc đồ đạc vào một cái hộp hoặc túi).",
      "examples": [
        "She packed her clothes for the weekend trip.",
        "Before leaving, remember to pack your passport."
      ]
    },
    "bag": {
      "word": "Bag",
      "type": "n",
      "pronunciation": "/bæɡ/",
      "meaning": "Hành lý, túi",
      "definition": "A flexible container with an opening at the top, used for carrying items (Một loại đồ đựng linh hoạt với một lỗ mở ở phía trên, được sử dụng để mang đồ đạc).",
      "examples": [
        "I forgot my bag at the office.",
        "She bought a new bag for the trip."
      ]
    },
    "pack your bag": {
      "word": "Pack your bag",
      "type": "v",
      "pronunciation": "/pæk jɔːr bæɡ/",
      "meaning": "Gói hành lý của bạn",
      "definition": "To prepare and fill a bag with personal items for a trip or journey (Chuẩn bị và đóng gói túi với các vật phẩm cá nhân cho một chuyến đi hoặc hành trình).",
      "examples": [
        "It's time to pack your bag for the vacation.",
        "I need to pack my bag before we leave for the airport."
      ]
    },




    "embrace": {
      "word": "Embrace",
      "type": "v",
      "pronunciation": "/ɪmˈbreɪs/",
      "meaning": "Ôm, chấp nhận",
      "definition": "To accept or eagerly welcome something (Chấp nhận hoặc chào đón một cách hăng hái cái gì đó).",
      "examples": [
        "She embraced the challenges that came with her new job.",
        "He embraced the idea of moving to a new country."
      ]
    },
    "unknown": {
      "word": "Unknown",
      "type": "adj",
      "pronunciation": "/ʌnˈnoʊn/",
      "meaning": "Không biết, chưa biết",
      "definition": "Not known or familiar (Không biết hoặc quen thuộc).",
      "examples": [
        "The cause of the disease remains unknown.",
        "We have no information about the unknown caller."
      ]
    },
    "the unknown": {
      "word": "The unknown",
      "type": "n",
      "pronunciation": "/ðə ʌnˈnoʊn/",
      "meaning": "Điều không biết",
      "definition": "The state or condition of being unknown (Trạng thái hoặc điều kiện của việc không biết).",
      "examples": [
        "The explorers ventured into the unknown.",
        "The unknown can be both exciting and frightening."
      ]
    },
    "embrace the unknown": {
      "word": "Embrace the unknown",
      "type": "v",
      "pronunciation": "/ɪmˈbreɪs ðə ʌnˈnoʊn/",
      "meaning": "Ôm lấy điều không biết",
      "definition": "To accept and welcome the uncertainties or unfamiliar aspects of life or a situation (Chấp nhận và hoan nghênh sự không chắc chắn hoặc những khía cạnh không quen thuộc của cuộc sống hoặc tình huống).",
      "examples": [
        "She learned to embrace the unknown when she started her own business.",
        "Embracing the unknown can lead to personal growth and discovery."
      ]
    },




    "let": {
      "word": "Let",
      "type": "v",
      "pronunciation": "/let/",
      "meaning": "Để, cho phép",
      "definition": "To allow or permit (Cho phép hoặc cho phép).",
      "examples": [
        "Parents should let their children explore the world.",
        "I’ll let you know when the meeting starts."
      ]
    },
    "wanderlust": {
      "word": "Wanderlust",
      "type": "n",
      "pronunciation": "/ˈwɑːndərlʌst/",
      "meaning": "Khao khát khám phá",
      "definition": "A strong desire to travel and explore the world (Một khao khát mạnh mẽ để du lịch và khám phá thế giới).",
      "examples": [
        "Her wanderlust took her to many countries around the world.",
        "He felt the pull of wanderlust every time he saw a new map."
      ]
    },
    "take": {
      "word": "Take",
      "type": "v",
      "pronunciation": "/teɪk/",
      "meaning": "Dẫn, đưa",
      "definition": "To go or move with someone or something from one place to another (Đi hoặc di chuyển với ai đó hoặc cái gì đó từ một nơi này sang nơi khác).",
      "examples": [
        "She will take you to the best places in the city.",
        "They took a long journey across the desert."
      ]
    },
    "unforgettable": {
      "word": "Unforgettable",
      "type": "adj",
      "pronunciation": "/ˌʌnfərˈɡetəbl̩/",
      "meaning": "Không thể quên",
      "definition": "Impossible to forget; very memorable (Không thể quên; rất đáng nhớ).",
      "examples": [
        "Their wedding was an unforgettable event.",
        "It was an unforgettable experience, one I will cherish forever."
      ]
    },

    "unforgettable adventure": {
      "word": "Unforgettable adventure",
      "type": "n",
      "pronunciation": "/ˌʌnfərˈɡetəbl̩ ədˈventʃər/",
      "meaning": "Cuộc phiêu lưu không thể quên",
      "definition": "An incredibly memorable and remarkable experience or journey (Một trải nghiệm hoặc hành trình đáng nhớ và đáng chú ý).",
      "examples": [
        "Their trip to the mountains was an unforgettable adventure.",
        "We had an unforgettable adventure when we sailed around the world."
      ]
    },

  };

  const handlePhraseClick = (phrase) => {
    setSelectedPhrase(DataVoca[phrase]); 
  };

  const closePopup = () => {
    setSelectedPhrase(null); 
  };

  return (
    <>
      <Header />
      <div className="flex relative justify-center">
        <header className="w-[666px] h-20 bg-[#ffecdb] left-[550px] flex items-center mt-10 mb-14 border border-[#faede1] rounded-2xl shadow-md text-lg text-[#3b342e] font-sans font-bold ">
          <div className="flex ml-[270px]">Song ngữ</div>
          <img src={hi} alt="" className="ml-[200px] w-20 h-20" />
        </header>
      </div>


      <div className="flex flex-col h-auto w-[680px] bg-[#f8f4f6] p-10 mx-auto rounded-3xl border  shadow shadow-[#f5f2f4] relative">

        <div className=""><h1 className="text-3xl font-bold mb-5 text-[#036ce0]">Travel</h1></div>
        <div className="mt-8 p-5 bg-[#f0f0f0] rounded-xl shadow-lg text-center mb-10">
          <h2 className="text-xl font-bold mb-3 text-[#036ce0]">Listen to a Travel</h2>
          <audio controls className="w-full">
            <source src={voice1} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <p className="text-lg leading-7 font-semibold text-[#600000] text-left">
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("Travel")}>
            Travel
          </span>{" "}
          is an {" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("amazing")}>
            amazing
          </span>{" "}

          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("experience")}>
            experience
          </span>{" "}
          that{" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("open")}>
            open
          </span>{" "}
          our{" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("mind")}>
            mind
          </span>{" "}

          to{" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("new")}>
            new
          </span>{" "}

          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("culture")}>
            culture
          </span>{" "}
          and{" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("perspective")}>
            perspective
          </span>
          . It{" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("allow")}>
            allow
          </span>{" "}
          us to{" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("explore")}>
            explore
          </span>{" "}

          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("breathtaking")}>
            breathtaking
          </span>{" "}

          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("landscape")}>
            landscape
          </span>
          ,
          {" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("taste")}>
            taste
          </span>{" "}

          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("delicious")}>
            delicious
          </span>{" "}

          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("cuisine")}>
            cuisine
          </span>

          ,
          {" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("and")}>
            and
          </span>{" "}

          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("meet")}>
            meet
          </span>{" "}

          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("fascinating")}>
            fascinating
          </span>
          {" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("people")}>
            people
          </span>

          .{" "}As we{" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("embark on")}>
            embark on
          </span>{" "}

          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("adventure")}>
            adventure
          </span>
          , we{" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("immerse")}>
            immerse
          </span>{" "}
          ourselves in
          {" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("local")}>
            local
          </span>{" "}

          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("tradition")}>
            tradition
          </span>{" "}



          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("visit")}>
            visit
          </span>{" "}

          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("stunning")}>
            stunning
          </span>{" "}

          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("landmark")}>
            landmark
          </span>{" "}

          and{" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("engage in")}>
            engage in
          </span>{" "}

          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("thrilling")}>
            thrilling
          </span>{" "}

          activities{" "}

          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("each")}>
            .Each
          </span>{" "}

          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("journey")}>
            journey
          </span>



          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("bring")}>
            bring
          </span>{" "}
          us{" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("closer to")}>
            closer to
          </span>{" "}



          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("understand")}>
            understand
          </span>{" "}
          the{" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("world")}>
            world
          </span>{" "}
          and ourselves.{" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("additionally")}>
            Additionally
          </span>

          , traveling
          {" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("offer")}>
            offer
          </span>{" "}
          us a{" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("chance")}>
            chance
          </span>{" "}

          to
          {" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("break")}>
            break
          </span>{" "}

          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("free")}>
            free
          </span>
          {" "}
          from
          {" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("routine")}>
            routine
          </span>
          ,
          {" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("discover")}>
            discover
          </span>{" "}

          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("hidden")}>
            hidden
          </span>{" "}

          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("treasure")}>
            treasure
          </span>
          , and
          {" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("create")}>
            create
          </span>{" "}

          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("lifelong")}>
            lifelong
          </span>{" "}

          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("memory")}>
            memory
          </span>
          . So{" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("pack")}>
            pack
          </span>{" "}
          your
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("bag")}>
            bag
          </span>
          ,
          {" "}

          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("embrace")}>
            embrace
          </span>{" "}

          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("the unknown")}>
            the unknown
          </span>

          , and{" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("let")}>
            let
          </span>{" "}
          the{" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("wanderlust")}>
            wanderlust
          </span>{" "}

          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("take")}>
            take
          </span>{" "}
          you on an{" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("unforgettable")}>
            unforgettable
          </span>
          {" "}


          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("adventure")}>
            adventure
          </span>
          .

        </p>

        {/* Popup   */}
        {selectedPhrase && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-[500px] shadow-lg relative text-left text-base">
              <h2 className="text-xl font-bold mb-3 text-[#d8974c]">Từ vựng: {selectedPhrase.word}</h2>
              <p>
                <strong>Loại từ:</strong> {selectedPhrase.type}
              </p>
              <p>
                <strong>Phiên âm:</strong> {selectedPhrase.pronunciation}
              </p>
              <p>
                <strong>Nghĩa:</strong> {selectedPhrase.meaning}
              </p>
              <p className="mt-3">
                <strong>Định nghĩa:</strong> {selectedPhrase.definition}
              </p>
              <p className="mt-3">
                <strong>Ví dụ:</strong>
              </p>
              <ul className="list-disc list-inside">
                {selectedPhrase.examples.map((example, index) => (
                  <li key={index}>{example}</li>
                ))}
              </ul>
              <button
                className="absolute top-2 right-2 text-red-500 font-bold"
                onClick={closePopup}
              >
                Đóng
              </button>
            </div>
          </div>
        )}
      </div></>
  );
};

export default VocabularyPopup;
