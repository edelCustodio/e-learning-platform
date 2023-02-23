import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllDocumentsComponent } from './all-documents/all-documents.component';


import { AppComponent } from './app.component';
import { AuthGuard } from './auth-guard.guard';
import { AuthorizationComponent } from './authorization/authorization.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { DepartmentComponent } from './department/department.component';
import { DialogComponent } from './dialog/dialog.component';
import { EdocumentsComponent } from './edocuments/edocuments.component';
import { AdminGuard } from './guard/admin.guard';
import { ProfGuard } from './guard/prof.guard';
import { NavigationComponent } from './navigation/navigation.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PaymentsComponent } from './payments/payments.component';
import { PreExamOTypeComponent } from './pre-exam-o-type/pre-exam-o-type.component';
import { ProfessorCourseComponent } from './professor-course/professor-course.component';
import { ProfessorExamRecordsComponent } from './professor-exam-records/professor-exam-records.component';
import { ProfessorPreExamObligationRecordsComponent } from './professor-pre-exam-obligation-records/professor-pre-exam-obligation-records.component';
import { ProfessorPreExamObligationComponent } from './professor-pre-exam-obligation/professor-pre-exam-obligation.component';
import { ProfessorTypeComponent } from './professor-type/professor-type.component';
import { StudentCourseComponent } from './student-course/student-course.component';
import { StudentPaymentsComponent } from './student-payments/student-payments.component';
import { StudentPreExamObligationComponent } from './student-pre-exam-obligation/student-pre-exam-obligation.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { JwtInterceptorService } from './authorization/jwt-interceptor.service';
import { TokenInterceptorService } from './authorization/token-interceptor.service';
import { UserService } from './user/user.service';
import { DepartmentService } from './department/department.service';
import { AuthorizationService } from './authorization/authorization.service';
import { PreExamObligationRecordsService } from './student-pre-exam-obligation/pre-exam-obligation-records.service';
import { PreExamOTypeService } from './pre-exam-o-type/pre-exam-o-type.service';
import { PreExamObligationervice } from './professor-pre-exam-obligation/pre-exam-obligation.service';
import { CourseService } from './course/course.service';
import { ExamService } from './shared/exam.service';
import { ProfessorTypeService } from './professor-type/professor_type.service';
import { PaymentsService } from './payments/payments.service';
import { ExamRecordsService } from './shared/examRecordsService';
import { StudentPaymentsService } from './student-payments/student_payments.service';
import { RoleService } from './shared/role.service';
import { UserProfileService } from './user-profile/user-profile.service';
import { EdocumentService } from './edocuments/edocument.service';
import { DataService } from './shared/data.service';
import { AllDocumentsService } from './all-documents/all-documents.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


const routes: Routes = [
  /* {
    path: '',
    redirectTo: '/user-login',
    pathMatch: 'full'
  }, */
  {
    path: 'login',
    component: AuthorizationComponent
  },
  {
    path: 'users',
    component: UserComponent,
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'all-documents',
    component: AllDocumentsComponent,
    canActivate: [AuthGuard, AdminGuard ]
  },
  {
    path: 'profile/:id',
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'documents/:id',
    component: EdocumentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'preExamOTypes',
    component: PreExamOTypeComponent,
    canActivate: [AuthGuard, AdminGuard || ProfGuard]
  },
  {
    path: "professorCourses",
    component: ProfessorCourseComponent
  },
  {
    path: "professor_types",
    component: ProfessorTypeComponent
  },
  {
    path: "payments",
    component: PaymentsComponent
  },
  {
    path: "student_payments",
    component: PaymentsComponent
  },
  {
    path: "department",
    component: DepartmentComponent,
    canActivate: [AuthGuard , AdminGuard]
  },
  {
    path: "course",
    component: CourseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "courses/:id",
    component: CoursesComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    UserComponent,
    AuthorizationComponent,
    DepartmentComponent,
    StudentPreExamObligationComponent,
    ProfessorPreExamObligationComponent,
    ProfessorPreExamObligationRecordsComponent,
    UserProfileComponent,
    PaginationComponent,
    DialogComponent,
    PreExamOTypeComponent,
    EdocumentsComponent,
    StudentCourseComponent,
    ProfessorCourseComponent,
    NavigationComponent,
    AllDocumentsComponent,
    ProfessorTypeComponent,
    PaymentsComponent,
    StudentPaymentsComponent,
    ProfessorExamRecordsComponent,
    CoursesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: JwtInterceptorService,
    //   multi: true
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    UserService, DepartmentService, AuthorizationService, TokenInterceptorService,
    PreExamObligationRecordsService, PreExamOTypeService, PreExamObligationervice, CourseService,
    ExamService, ProfessorTypeService, PaymentsService, ExamService, ExamRecordsService, StudentPaymentsService, ProfGuard,
    RoleService, UserProfileService, AuthGuard, EdocumentService, DataService, AdminGuard, AllDocumentsService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/**
 *
 * Remove
 *
 * JwtInterceptorService
 */
