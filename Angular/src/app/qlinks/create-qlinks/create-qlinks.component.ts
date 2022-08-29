import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateQlinks } from '../models/create-qlinks.models';
import { QlinksCategory } from '../models/qlinks-category.models';
import { QlinksService } from '../service/qlinks.service';

@Component({
  selector: 'app-create-qlinks',
  templateUrl: './create-qlinks.component.html',
  styleUrls: ['./create-qlinks.component.scss'],
})
export class CreateQlinksComponent implements OnInit {
  // @ts-ignore
  formGroup: FormGroup;
  categories: Array<QlinksCategory> = [];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly snackBar: MatSnackBar,
    private readonly _qlinksService: QlinksService,
    private readonly _dialogRef: MatDialogRef<CreateQlinksComponent>
  ) {}

  ngOnInit(): void {
    this.createForm();
    this._qlinksService.getQlinksCateogory().subscribe((result) => {
      this.categories = result;
    })
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      name: [null, [Validators.required]],
      url: [null, [Validators.required]],
      category: [null, [Validators.required]],
    });
  }

  onCancelClick() {
    this._dialogRef.close();
  }

  onSubmit(post: any) {
    console.log(post);
    const qlinkObj: CreateQlinks = {
      name: post.name,
      url: post.url,
      category: post.category
    }
    this._qlinksService.createQlinks(qlinkObj).subscribe(() => {
      this.snackBar.open("Link added.", "OK", {
          duration: 2000
      });
      this._dialogRef.close();
    });
  }
}
