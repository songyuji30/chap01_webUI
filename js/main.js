console.log('시작');




// 2. 근무이력의 추가 버튼 요소 
console.log($('.two-content .add-btn .btn'));

// 2. 근무 이력의 추가 버튼 클릭 이벤트
const addTwoElem = $('.two-content .add-btn .btn');
addTwoElem.on('click', function(){
    console.log('추가 버튼 클릭 이벤트 발생');
    
    // tr 부분 생성하기(삭제 버튼으로!)
    var addTwoContent = '<tr>';
    addTwoContent += '<td><input class="form-control" type="text" name=""></td>';
    addTwoContent += '<td><input class="form-control" type="date" value="2022-10-22"></td>';
    addTwoContent += '<td><input class="form-control" type="date" name="" value="2022-10-22"></td>';
    addTwoContent += '<td><select class="form-control" id="HisSportsNo" name="SportsNo"><option value="ClubNameNull">종목을 선택하세요.</option><option value="CN0001">검도</option><option value="CN0002">근대3종</option><option value="CN0003">근대5종</option><option value="CN0004">기계체조</option><option value="CN0005">농구</option><option value="CN0006">도약</option><option value="CN0007">럭비</option><option value="CN0008">레슬링</option><option value="CN0009">롤러</option><option value="CN0000">미등록사용자</option><option value="CN0043">바둑</option></td>';
    addTwoContent += '<td><div class="delete-btn"><input type="button" class="btn delete-btn" style="color: #fff;" value="삭제" onclick="deleteClicked(this)"></td></div></td></tr>';
    
    // 요소 추가 -> tbody 내부에!
    const tbodyTwo = $('.two-content .table #LeaderWorkingExperience');
    tbodyTwo.append(addTwoContent);

    
});

// 3. 자격사항의 추가 버튼 요소 
console.log($('.three-content .add-btn .btn'));

// 3. 자격사항의 추가 버튼 클릭 이벤트
const addThreeElem = $('.three-content .add-btn .btn');
addThreeElem.on('click', function(){
    console.log('추가 버튼 클릭 이벤트 발생');
    
    // tr 부분 생성하기(삭제 버튼으로!)
    var addThreeContent = '<tr>';
    addThreeContent += '';
    addThreeContent += '<td><select class="form-control valid selectpicker" name="CertificateName" id="licenseName"><option value="null">선택하세요.</option><option value="1급 전문스포츠지도사">1급 전문스포츠지도사</option>';
    addThreeContent += '<option value="2급 전문스포츠지도사">2급 전문스포츠지도사</option><option value="건강운동관리사">건강운동관리사</option><option value="1급 생활스포츠지도사">1급 생활스포츠지도사</option><option value="2급 생활스포츠지도사">2급 생활스포츠지도사</option></select></td>';
    addThreeContent += '<td><input class="form-control" type="text" id="licenseNumber" name="CertificateNumber"></td><td><input class="form-control" type="date" id="licenseDate" name="CertificateDT" value="2022-10-19"></td>';
    addThreeContent += '<td><select class="form-control valid" name="Organization" id="licenseOrgan"><option value="Null">선택하세요.</option><option value="문화체육관광부장관">문화체육관광부장관</option></select></td>';
    addThreeContent += '<td><div class="delete-btn"><input type="button" class="btn delete-btn" style="color: #fff;" value="삭제" onclick="deleteClicked(this)"></td></div></td></tr>';
    
    // 요소 추가 -> tbody 내부에!
    const tbodyThree = $('.three-content .table #LeaderCertificate');
    tbodyThree.append(addThreeContent);

    
});

// 2,3 공통으로 삭제버튼 기능 구현하기
function deleteClicked(tr){
    console.log('삭제 버튼 클릭 이벤트 발생');
    
    // 클릭된 요소를 받아와서 해당 행을 삭제시키기
    var deleteContentRow = $(tr).parent().parent().parent();
    console.log(deleteContentRow);
	deleteContentRow.remove();
    
}


// 클릭 발생시킬 요소 가져와보기(식별코드 검색)
var idcodeClicked = $('.idcode .input-group');
idcodeClicked.on('click', function(e){
    console.log('식별코드 모달창을 띄워줍니다.');
    modalId(e);
});

//모달 띄워주기
function modalId(e){
    console.log('모달창을 띄워줍니다.');
    $('#modal-idcode').modal("show");

}

// 클릭 발생시킬 요소 가져와보기(학교명 검색)
var schoolNameClicked = $('.schoolName .input-group');
schoolNameClicked.on('click', function(e){
    console.log('학교명 모달창을 띄워줍니다.');
    modalSc(e);
});

//모달 띄워주기
function modalSc(e){
    console.log('모달창을 띄워줍니다.');
    $('#modal-schoolName').modal("show");

}


//모달 창의 닫기 버튼 클릭
function closeIDModal(){
    $('#modal-idcode').modal('hide');
}
function closeScModal(){
    $('#modal-schoolName').modal('hide');
}


