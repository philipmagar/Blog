import {
    IsString,
    IsOptional,
    IsEnum,
    IsArray,
    IsUUID,
    MinLength,
    MaxLength,
} from 'class-validator';
import { PostStatus } from '../entities/post.entity';

export class CreatePostDto {
    @IsString()
    @MinLength(3)
    @MaxLength(200)
    title: string;

    @IsString()
    @MinLength(10)
    content: string;

    @IsString()
    @IsOptional()
    @MaxLength(500)
    excerpt?: string;

    @IsString()
    @IsOptional()
    featuredImage?: string;

    @IsEnum(PostStatus)
    @IsOptional()
    status?: PostStatus;

    @IsArray()
    @IsUUID('4', { each: true })
    @IsOptional()
    tagIds?: string[];
}
